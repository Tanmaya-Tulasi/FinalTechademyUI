import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee :any;
  addEmployeeRequest:Employee={
    id: 0,
    employeeName: '',
    email: '',
    phoneNumber: '',
    designationID: 0,
    address: '',
    gender: '',
    memberSince:  new Date(2022, 11, 7)
  };
  constructor(private route:ActivatedRoute,private employeesService:EmployeeserviceService,private router:Router) {
   }
  ngOnInit(): void {
  }
  addEmployee()
  {
    console.log("Add employee method triggred");

    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(Employee) =>{
        
        console.log(Employee);
        this.router.navigate(['/employeedetails']);

      }
    });
  }

}
