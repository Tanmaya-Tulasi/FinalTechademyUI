import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WorkingHours } from '../models/workinghours.model';

import { WorkinghoursService } from './workinghours.service';

describe('WorkinghoursService', () => {
  let service: WorkinghoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(WorkinghoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('checking base url',()=>
  {
    expect(service.baseApiUrl).toEqual('https://localhost:44379/');
  });
  it('wrong id throws error',()=>
  {
      expect(service.getWorkingHours('000')).toThrowError;
  });
  let request:WorkingHours= {
    hoursID: 5,
    employeeID: 5,
    companyWokingHours: 50,
    employeeWorkingHours: 50
  };
  it('checking adding hours',()=>
  {
      
      expect(service.addWorkingHours(request)).toBeTruthy();
  });
  it('checking get all working hours ',()=>
  {
     
    expect(service.getAllWorkingHours.length).toBeGreaterThanOrEqual(0);
    expect(service.getWorkingHours.length).toBeLessThanOrEqual(1);
  });
  it('checking update ',()=>
  {
    let request2 :WorkingHours ={
      hoursID: 5,
      employeeID: 5,
      companyWokingHours: 60,
      employeeWorkingHours: 90
    };
   
    expect(service.updateWorkingHours(5,request2)).toBeTrue;
   
  });
  it('checking delete',()=>
  {
    let d =service.deleteWorkingHours(5);
    
    expect(d).toBeTruthy();
  });
});
