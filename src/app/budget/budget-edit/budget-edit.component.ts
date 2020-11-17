import {Component, Input, OnInit} from '@angular/core';
import {BudgetService} from '../budget.service';
import {Budget} from '../budget';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.scss']
})
export class BudgetEditComponent implements OnInit {

  public formGroup: FormGroup;
  public budget: Budget;
  @Input() inputBudget: Budget;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.formGroup = new FormGroup({
      amount: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    if (this.inputBudget) {
      this.formGroup.patchValue({
        amount: this.inputBudget.amount,
        description: this.inputBudget.description
      });
    }
  }

  public submit(): void {
    if (this.inputBudget) {
      this.budgetService.updateDataAfterStoreIt(this.inputBudget);
      const id = this.inputBudget.id;
      this.inputBudget = this.formGroup.value;
      this.inputBudget.id = id;
      this.budgetService.update(this.inputBudget).subscribe((budget: Budget) => {
        this.inputBudget = budget;
      });
    } else {
      this.budget = this.formGroup.value;
      this.budgetService.save(this.budget).subscribe((budget: Budget) => {
        this.budget = budget;
      });
      this.budgetService.updateDataAfterStoreIt(this.budget);
    }
  }
}
