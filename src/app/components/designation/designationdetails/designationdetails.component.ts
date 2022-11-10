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
  searchText:any;
title='pagination';

POSTS:any;
page:number=1;
count:number=0;
tableSize:number=10;
tablesize:any=[5,10,15,20]
  constructor(private designationdetails : DesignationService) { }

  ngOnInit(): void {
    this.getAllDesignations()
  
}
getAllDesignations():void
{console.log("hello");
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
onTableDataChange(event:any)
{
  this.page=event;
  this.getAllDesignations();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllDesignations();
}
}

