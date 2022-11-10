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
  searchText:any;
  title='pagination';
  
  POSTS:any;
  page:number=1;
  count:number=0;
  tableSize:number=10;
  tablesize:any=[5,10,15,20]
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

this.getAllLeaves();
  }
  getAllLeaves():void
  {
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
  onTableDataChange(event:any)
{
  this.page=event;
  this.getAllLeaves();
}
onTableSizeChange(event:any):void
{
  this.tableSize=event.target.value;
  this.page=1;
  this.getAllLeaves();
}

  }

