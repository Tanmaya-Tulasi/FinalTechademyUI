import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkingHours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-addworkinghours',
  templateUrl: './addworkinghours.component.html',
  styleUrls: ['./addworkinghours.component.css']
})
export class AddworkinghoursComponent implements OnInit {

  workinghoursRequest:WorkingHours={
    hoursID: 0,
    employeeID: 0,
    companyWokingHours: 0,
    employeeWorkingHours: 0
  };
  constructor(private route:ActivatedRoute,private workinghourservice:WorkinghoursService,private router:Router) {
   }
  ngOnInit(): void { 
  }
  addWorkingHours()
  {
    console.log("Add workinghours method triggred");

    this.workinghourservice.addWorkingHours(this.workinghoursRequest)
    .subscribe({
      next:(WorkingHours) =>{
        
        console.log(WorkingHours);
        this.router.navigate(['/workinghoursdetails']);
      }
    });
  }



}
