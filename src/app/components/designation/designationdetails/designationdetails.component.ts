import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designationdetails',
  templateUrl: './designationdetails.component.html',
  styleUrls: ['./designationdetails.component.css']
})
export class DesignationdetailsComponent implements OnInit {

  EmployeeDetails : EmployeeDetails[] =[];
  constructor(private employeedetailsservice : EmployeeserviceService) { }

  ngOnInit(): void {
    this.employeedetailsservice.getAllEmployees()
    .subscribe({
      next : (Employeedetails) =>
      {
        this.EmployeeDetails = Employeedetails;
      },
      error : (response) =>
      {
        console.log(response);
      }
    })
  }
}
