import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddesignationComponent } from './components/designation/adddesignation/adddesignation.component';
import { DesignationdetailsComponent } from './components/designation/designationdetails/designationdetails.component';
import { EditdesignationComponent } from './components/designation/editdesignation/editdesignation.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditemployeeComponent } from './components/employees/editemployee/editemployee.component';
import { EmployeedetailsComponent } from './components/employees/employeedetails/employeedetails.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddPaymentRuleComponent } from './components/paymentrules/add-payment-rule/add-payment-rule.component';
import { EditPaymentRuleComponent } from './components/paymentrules/edit-payment-rule/edit-payment-rule.component';
import { PaymentRuleDetailsComponent } from './components/paymentrules/payment-rule-details/payment-rule-details.component';
import { RegisterComponent } from './components/register/register.component';
import { AddrequestleaveComponent } from './components/requestleave/addrequestleave/addrequestleave.component';
import { EditrequestleaveComponent } from './components/requestleave/editrequestleave/editrequestleave.component';
import { RequestleavedetailsComponent } from './components/requestleave/requestleavedetails/requestleavedetails.component';
import { AddworkinghoursComponent } from './components/workinghours/addworkinghours/addworkinghours.component';
import { EditworkinghoursComponent } from './components/workinghours/editworkinghours/editworkinghours.component';
import { WorkinghoursdetailsComponent } from './components/workinghours/workinghoursdetails/workinghoursdetails.component';
import { AuthguardService } from './services/authguard.service';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component : HomeComponent,
    canActivate : [AuthguardService]
  },
  {
    path: 'employeedetails',
    component : EmployeedetailsComponent,
  },
  {
    path: 'designationdetails',
    component : DesignationdetailsComponent,
  },
  {
    path: 'workinghoursdetails',
    component : WorkinghoursdetailsComponent,
  },
  {
    path: 'requestleavedetails',
    component : RequestleavedetailsComponent,
  },
  {
    path: 'paymentrulesdetails',
    component : PaymentRuleDetailsComponent
  },
  {
    path :'addmployee',
    component : AddEmployeeComponent
  },
  {
    path :'adddesignation',
    component : AdddesignationComponent
  },
  {
    path :'addrequestleave',
    component : AddrequestleaveComponent
  },
  {
    path :'addworkinghours',
    component : AddworkinghoursComponent
  },
  {
    path :'addpaymentrules',
    component : AddPaymentRuleComponent
  },
  {
    path :'employee/edit/:id',
    component : EditemployeeComponent
  },
  {
    path :'designation/edit/:id',
    component : EditdesignationComponent
  },
  {
    path :'workinghours/edit/:id',
    component : EditworkinghoursComponent
  },
  
  {

    path :'requestleave/edit/:leaveID',
    component : EditrequestleaveComponent
  },
  {
    path :'paymentrules/edit/:id',
    component : EditPaymentRuleComponent
  },
  
  {
    path: '**',
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
