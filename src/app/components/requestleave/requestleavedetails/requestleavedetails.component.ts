import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLeave } from 'src/app/models/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-requestleavedetails',
  templateUrl: './requestleavedetails.component.html',
  styleUrls: ['./requestleavedetails.component.css']
})
export class RequestleavedetailsComponent implements OnInit {

  RequestLeave:RequestLeave[]=[];
requestleave:RequestLeave={
  leaveID:0,
  employeeID:0,
  leaveType:'',
  when:new Date(),
  leaveReason:'',
  leaveStatus:''
}

  constructor(private route:ActivatedRoute,private requestleaveservice:RequestleaveService,private router:Router) { }



  ngOnInit(): void {
    this.requestleaveservice.getAllLeaves()
    .subscribe({
      next:(RequestLeave)=>
      {
        this.RequestLeave=RequestLeave;
        console.log(this.RequestLeave)

      },
      error:(response)=>{
        console.log(response);
      }
    })
    
  }
}
