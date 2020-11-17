import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Budget} from '../budget';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  public incomeBudgetList: Array<Budget>;
  public expensesBudgetList: Array<Budget>;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.budgetService.data.subscribe((budget: Budget) => {
      if (budget.amount) {
        budget.amount < 0 ? this.expensesBudgetList.push(budget) : this.incomeBudgetList.push(budget);
      }
    });
    this.budgetService.deleteS.subscribe((id: number) => {
      if (id !== 0) {
        const budgetToRemove = this.incomeBudgetList.find(b => b.id === id)
          ? this.incomeBudgetList.find(b => b.id === id)
          : this.expensesBudgetList.find(b => b.id === id);
        if (budgetToRemove.amount < 0) {
          this.expensesBudgetList = this.expensesBudgetList.filter(budget => budget.id !== id);
        } else {
          this.incomeBudgetList = this.incomeBudgetList.filter(budget => budget.id !== id);
        }
      }
    });
  }

  public findAll(): void {
    this.budgetService.findAll().subscribe((budgets: Array<Budget>) => {
      this.incomeBudgetList = budgets.filter((budget: Budget) => budget.amount >= 0);
      this.expensesBudgetList = budgets.filter((budget: Budget) => budget.amount < 0);
    });
  }

}
