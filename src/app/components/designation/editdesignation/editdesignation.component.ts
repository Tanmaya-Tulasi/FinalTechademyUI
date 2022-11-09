import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-editdesignation',
  templateUrl: './editdesignation.component.html',
  styleUrls: ['./editdesignation.component.css']
})
export class EditdesignationComponent implements OnInit {

  designationDetails:Designation={
    designationID: 0,
    designationName: '',
    departmentName: '',
    roleName: '',
    
  }
  
    constructor(private route:ActivatedRoute,private designationService:DesignationService,private router:Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next:(params) =>
        {
          const id=params.get('id');
          if(id)
          {
            this.designationService.getDesignation(id)
            .subscribe({
              next:(response) =>{

                console.log(id);
                console.log(this.designationDetails);
                this.designationDetails=response;
                console.log(this.designationDetails);

              }
            });
          }
        }
      });
    }
    updateDesignation(){
      this.designationService.updateDesignation(this.designationDetails.designationID,this.designationDetails)
      .subscribe({
        next:(response) =>{
          console.log(this.designationDetails);
          this.router.navigate(['/designationdetails']);
        }});
    }
    deleteDesignation(id:number){
      this.designationService.deleteDesignation(id)
      .subscribe({
        next:(response) =>{
          this.router.navigate(['/designationdetails']);
        }
      });  
   }

}
