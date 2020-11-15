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

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.budgetService.findAll().subscribe((budgets: Array<Budget>) => {
      this.incomeBudgetList = budgets.filter((budget: Budget) => budget.amount >= 0);
      this.expensesBudgetList = budgets.filter((budget: Budget) => budget.amount < 0);
    });
  }

}
