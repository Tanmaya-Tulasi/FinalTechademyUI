import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/models/employeedetails.model';
import { EmployeedetailsService } from 'src/app/services/employeedetails.service';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 EmployeeDetails : EmployeeDetails[] =[];
  constructor(private employeedetailsservice : EmployeeserviceService) { }

  ngOnInit(): void {
    this.employeedetailsservice.getAllEmployees()
    .subscribe({
      next : (Employeedetails) =>
      {
        this.EmployeeDetails = Employeedetails;
        console.log(this.EmployeeDetails);
      },
      error : (response) =>
      {
        console.log(response);
      }
    })
  }

}
