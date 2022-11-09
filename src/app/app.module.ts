import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CompanyrulesComponent } from './components/companyrules/companyrules.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EmployeedetailsComponent } from './components/employees/employeedetails/employeedetails.component';
import { EditemployeeComponent } from './components/employees/editemployee/editemployee.component';
import { AdddesignationComponent } from './components/designation/adddesignation/adddesignation.component';
import { EditdesignationComponent } from './components/designation/editdesignation/editdesignation.component';
import { DesignationdetailsComponent } from './components/designation/designationdetails/designationdetails.component';
import { WorkinghoursdetailsComponent } from './components/workinghours/workinghoursdetails/workinghoursdetails.component';
import { AddworkinghoursComponent } from './components/workinghours/addworkinghours/addworkinghours.component';
import { EditworkinghoursComponent } from './components/workinghours/editworkinghours/editworkinghours.component';
import { AddrequestleaveComponent } from './components/requestleave/addrequestleave/addrequestleave.component';
import { EditrequestleaveComponent } from './components/requestleave/editrequestleave/editrequestleave.component';
import { RequestleavedetailsComponent } from './components/requestleave/requestleavedetails/requestleavedetails.component';
import { AddPaymentRuleComponent } from './components/paymentrules/add-payment-rule/add-payment-rule.component';
import { EditPaymentRuleComponent } from './components/paymentrules/edit-payment-rule/edit-payment-rule.component';
import { PaymentRuleDetailsComponent } from './components/paymentrules/payment-rule-details/payment-rule-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    CompanyrulesComponent,
    AddEmployeeComponent,
    EmployeedetailsComponent,
    EditemployeeComponent,
    AdddesignationComponent,
    EditdesignationComponent,
    DesignationdetailsComponent,
    WorkinghoursdetailsComponent,
    AddworkinghoursComponent,
    EditworkinghoursComponent,
    AddrequestleaveComponent,
    EditrequestleaveComponent,
    RequestleavedetailsComponent,
    AddPaymentRuleComponent,
    EditPaymentRuleComponent,
    PaymentRuleDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientTestingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
