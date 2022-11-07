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
import { EmployeeComponent } from './employee/employee.component';
import { RequestleaveComponent } from './components/requestleave/requestleave.component';
import { WorkinghoursComponent } from './components/workinghours/workinghours.component';
import { PaymentrulesComponent } from './components/paymentrules/paymentrules.component';
import { CompanyrulesComponent } from './components/companyrules/companyrules.component';
import { DesignationComponent } from './components/designation/designation.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    EmployeeComponent,
    RequestleaveComponent,
    WorkinghoursComponent,
    PaymentrulesComponent,
    CompanyrulesComponent,
    DesignationComponent,
    AddEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
