import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designationdetails',
  templateUrl: './designationdetails.component.html',
  styleUrls: ['./designationdetails.component.css']
})
export class DesignationdetailsComponent implements OnInit {

  DesignationDetails : Designation[] =[];
  constructor(private designationdetails : DesignationService) { }

  ngOnInit(): void {
    this.designationdetails.getAllDesignations()
    .subscribe({
      next : (DesignationDetails) =>
      {
        this.DesignationDetails = DesignationDetails;
      },
      error : (response) =>
      {
        console.log(response);
      }
    })
  } 
}
