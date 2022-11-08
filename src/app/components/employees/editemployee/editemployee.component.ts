import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employeeDetails:Employee={
    id: 0,
    employeeName: '',
    email: '',
    phoneNumber: '',
    designationId: 0,
    address: '',
    gender: '',
    memberSince:  new Date(2022, 11, 7)
  }
  
    constructor(private route:ActivatedRoute,private employeesService:EmployeeserviceService,private router:Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params) =>
        {
          const id=params.get('id');
          if(id)
          {
            this.employeesService.getEmployee(id)
            .subscribe({
              next:(response) =>{
                //console.log("ID check");
                //console.log(this.employeeDetails.designationId);
                this.employeeDetails=response;
              }
            });
          }
        }
      });
    }
    updateEmployee(){
      this.employeesService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/employeedetails']);
        }});
    }
    deleteEmployee(id:number){
      this.employeesService.deleteEmployee(id)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/employeedetails']);
        }
      });
  }

}
