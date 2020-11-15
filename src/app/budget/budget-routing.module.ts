import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BudgetListComponent} from './budget-list/budget-list.component';
import {BudgetEditComponent} from './budget-edit/budget-edit.component';
import {BudgetTotalComponent} from './budget-total/budget-total.component';
import {BudgetDetailComponent} from './budget-detail/budget-detail.component';


const routes: Routes = [
  {
    path: 'budgets',
    component: BudgetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }

export const budgetRoutingComponent = [BudgetEditComponent, BudgetListComponent, BudgetTotalComponent, BudgetDetailComponent];
