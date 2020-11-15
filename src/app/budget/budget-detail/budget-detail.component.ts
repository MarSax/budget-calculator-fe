import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../budget';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {

  @Input() incomeBudget: Budget;
  @Input() expenseBudget: Budget;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public openEditDialog(content): void {
    this.modalService.open(content, { centered: true });
  }

}
