import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { WorkingHours } from 'src/app/models/workinghours.model';
import { WorkinghoursService } from 'src/app/services/workinghours.service';

@Component({
  selector: 'app-workinghoursdetails',
  templateUrl: './workinghoursdetails.component.html',
  styleUrls: ['./workinghoursdetails.component.css']
})
export class WorkinghoursdetailsComponent implements OnInit {

  WorkingHoursDetails : WorkingHours[] =[];
  searchText:any;
  title='pagination';
  
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tablesize:any=[5,10,15,20]
  constructor(private workinghoursdetails : WorkinghoursService) { }

  ngOnInit(): void {
    this.getAllWorkingHours()
  }

    getAllWorkingHours():void{
      this.workinghoursdetails.getAllWorkingHours()
      .subscribe({
        next : (WorkingHoursDetails) =>
        {
          this.WorkingHoursDetails = WorkingHoursDetails;
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
  this.getAllWorkingHours();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllWorkingHours();
}
    }

