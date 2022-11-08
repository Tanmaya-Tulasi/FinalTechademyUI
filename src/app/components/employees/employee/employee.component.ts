import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Employees:Employee[]=[];
  constructor(private employeesService:EmployeeserviceService){}
  
    ngOnInit(): void {
      this.employeesService.getAllEmployees()
      .subscribe({
        next:(Employees) =>{
          this.Employees=Employees;
        },
        error:(response) =>{
          console.log(response);
        }
      })   
  
    }
}
