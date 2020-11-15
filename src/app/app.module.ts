import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BudgetModule} from './budget/budget.module';
import {BudgetRoutingModule} from './budget/budget-routing.module';
import {BudgetService} from './budget/budget.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModal, NgbModalConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BudgetModule,
    BudgetRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    BudgetService,
    NgbModalConfig,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
