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
  constructor(private workinghoursdetails : WorkinghoursService) { }

  ngOnInit(): void {
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

}
