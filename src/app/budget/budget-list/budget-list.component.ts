import {Component, OnInit} from '@angular/core';
import {Budget} from '../budget';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  public budgetList: Array<Budget>;

  constructor(private budgetService: BudgetService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.budgetService.data.subscribe((budget: Budget) => {
      if (budget.amount) {
        if (this.budgetList.map(bud => bud.id).indexOf(budget.id) !== -1) {
          BudgetListComponent.updateBudgetElement(this.budgetList, budget);
        } else {
          this.budgetList.push(budget);
        }
      }
    });
    this.budgetService.deleteS.subscribe((id: number) => {
      if (id !== 0) {
        this.budgetList = this.budgetList.filter(budget => budget.id !== id);
      }
    });
  }

  private static updateBudgetElement(budgetList: Array<Budget>, budget: Budget): void {
    budgetList.forEach((elem) => {
      if (elem.id === budget.id) {
        elem.description = budget.description;
        elem.amount = budget.amount;
      }
    });
  }

  public findAll(): void {
    this.budgetService.findAll().subscribe((budgets: Array<Budget>) => {
      this.budgetList = budgets;
    });
  }

}
