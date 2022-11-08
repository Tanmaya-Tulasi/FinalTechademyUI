import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-adddesignation',
  templateUrl: './adddesignation.component.html',
  styleUrls: ['./adddesignation.component.css']
})
export class AdddesignationComponent implements OnInit {

  designation :any;
  addDesignationRequest:Designation={
    designationID:0,
    designationName: '',
    departmentName: '',
    roleName:''
  };
  constructor(private route:ActivatedRoute,private designationService:DesignationService,private router:Router) {
   }
  ngOnInit(): void {
  }
  addDesignation()
  {
    console.log("Add employee method triggred");

    this.designationService.addDesignation(this.addDesignationRequest)
    .subscribe({
      next:(Designation) =>{
        
        console.log(Designation);
        this.router.navigate(['/designationdetails']);
      }
    });
  }

 
}
