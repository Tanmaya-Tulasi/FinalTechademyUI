import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkingHours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-editworkinghours',
  templateUrl: './editworkinghours.component.html',
  styleUrls: ['./editworkinghours.component.css']
})
export class EditworkinghoursComponent implements OnInit {
  
  workingHourDetails:WorkingHours={
    hoursID: 0,
    employeeID: 0,
    companyWokingHours: 0,
    employeeWorkingHours: 0
  }
  
    constructor(private route:ActivatedRoute,private workinghourservice:WorkinghoursService,private router:Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params) =>
        {
          const id=params.get('id');
          if(id)
          {
            this.workinghourservice.getWorkingHours(id)
            .subscribe({
              next:(response) =>{

                console.log(id);
                console.log(this.workingHourDetails);
                this.workingHourDetails=response;
                console.log(this.workingHourDetails);

              }
            });
          }
        }
      });
    }
    updateWorkingHours(){
      this.workinghourservice.updateWorkingHours(this.workingHourDetails.hoursID,this.workingHourDetails)
      .subscribe({
        next:(response) =>{
          console.log(this.workingHourDetails);
          this.router.navigate(['/workinghoursdetails']);
        }});
    }
    deleteWorkingHours(id:number){
      this.workinghourservice.deleteWorkingHours(id)
      .subscribe({
        next:(response) =>{
          console.log(id);
          this.router.navigate(['/workinghoursdetails']);
        }
      });
  
  
  }

}
