import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from 'src/app/models/employeedetails.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 EmployeeDetails : EmployeeDetails[] =[];
 searchText:any;
 title='pagination';
 
 POSTS:any;
 page:number=1;
 count:number=0;
 tableSize:number=10;
 tablesize:any=[5,10,15,20]
  constructor(private employeedetailsservice : EmployeeserviceService) { }

  ngOnInit(): void {
    this.getAllEmployees()
  }
  getAllEmployees():void
  {
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
  onTableDataChange(event:any)
{
  this.page=event;
  this.getAllEmployees();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllEmployees();
}
  }
 
