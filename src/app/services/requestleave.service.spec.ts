import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { observable } from 'rxjs';
import { RequestLeave } from '../models/requestleave.model';

import { RequestleaveService } from './requestleave.service';

describe('RequestleaveService', () => {
  let service: RequestleaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(RequestleaveService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  let request:RequestLeave= {
    leaveID: 5,
    employeeID: 5,
    leaveType: 'sick',
    when: new Date(),
    leaveReason: 'fever',
    leaveStatus: 'hold'
  };
  it('checking adding leave',()=>
  {
      
      expect(service.addLeave(request)).toBeTruthy();
  });
  it('checking getallLeaves ',()=>
  {
     
    expect(service.getAllLeaves.length).toBeGreaterThanOrEqual(0);
    expect(service.getLeave.length).toBeLessThanOrEqual(1);
  });
  it('checking update requestleaves',()=>
  {
    let request2 :RequestLeave ={
      leaveID: 5,
    employeeID: 5,
    leaveType: 'sick',
    when: new Date(),
    leaveReason: 'fever',
    leaveStatus: 'approved'
    };
    expect(service.updateLeave(5,request2)).toBeTrue;
   
  });
  it('checking delete',()=>
  {
    let d =service.deleteLeave(5);
    
    expect(d).toBeTruthy();
  });


});
