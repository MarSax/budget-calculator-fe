import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../budget';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {

  @Input() incomeBudget: Budget;
  @Input() expenseBudget: Budget;

  constructor(private modalService: NgbModal, private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  public openEditDialog(content): void {
    this.modalService.open(content, { centered: true });
  }

  public delete(id: number): void {
    this.budgetService.delete(id).subscribe();
  }
}
