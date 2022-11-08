import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { DeleteemployeeComponent } from './components/employees/deleteemployee/deleteemployee.component';
import { EditemployeeComponent } from './components/employees/editemployee/editemployee.component';
import { EmployeeComponent } from './components/employees/employee/employee.component';
import { EmployeedetailsComponent } from './components/employees/employeedetails/employeedetails.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
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
    path :'addmployee',
    component : AddEmployeeComponent
  },
  {
    path :'employee/edit/:id',
    component : EditemployeeComponent
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
