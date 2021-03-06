import {Component, OnInit} from '@angular/core';
import {Budget} from '../budget';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.scss']
})
export class BudgetTotalComponent implements OnInit {
  public budgetList: Array<Budget> = [];
  public totalAmount: number;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.budgetService.data.subscribe((budget: Budget) => {
      if (budget.amount) {
        this.budgetList.push(budget);
      }
      this.totalAmount = this.getTotalAmount();
    });
    this.budgetService.deleteS.subscribe((id: number) => {
      if (id !== 0) {
        this.budgetList = this.budgetList.filter(budget => budget.id !== id);
        this.totalAmount = this.getTotalAmount();
      }
    });
  }

  private getTotalAmount(): number {
    return this.budgetList
      .map((budget: Budget) => budget.amount)
      .reduce((a, b) => {
        return a + b;
      }, 0);
  }

  public findAll(): void {
    this.budgetService.findAll().subscribe((budgets: Array<Budget>) => {
      this.budgetList = budgets;
      this.totalAmount = this.getTotalAmount();
    });
  }
}
