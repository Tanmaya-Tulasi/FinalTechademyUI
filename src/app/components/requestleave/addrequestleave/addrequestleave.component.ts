import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLeave } from 'src/app/models/requestleave.model';
import { RequestleaveService } from 'src/app/services/requestleave.service';

@Component({
  selector: 'app-addrequestleave',
  templateUrl: './addrequestleave.component.html',
  styleUrls: ['./addrequestleave.component.css']
})
export class AddrequestleaveComponent implements OnInit {

  request:RequestLeave={
    leaveID:0,
    employeeID:0,
    leaveType:'',
    when:new Date(),
    leaveReason:'',
    leaveStatus:''
  }
  constructor(private route:ActivatedRoute,private requstleaveservice:RequestleaveService,private router:Router) { }


  ngOnInit(): void {
  }
  addLeave()
{
 
  this.requstleaveservice.addLeave(this.request)
  .subscribe({
    next:(RequestLeave)=>{
      console.log(RequestLeave);
      this.router.navigate(['/requestleavedetails']);
      
    }
  })
}
}
