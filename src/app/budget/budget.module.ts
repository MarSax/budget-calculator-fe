import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {budgetRoutingComponent} from './budget-routing.module';
import {BudgetTotalComponent} from './budget-total/budget-total.component';
import {BudgetEditComponent} from './budget-edit/budget-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BudgetService} from './budget.service';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';


@NgModule({
  declarations: [budgetRoutingComponent, BudgetDetailComponent],
  exports: [
    BudgetTotalComponent,
    BudgetEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class BudgetModule { }
