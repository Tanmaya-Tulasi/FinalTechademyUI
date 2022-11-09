import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Employee } from '../models/employee.model';

import { EmployeeserviceService } from './employeeservice.service';

describe('EmployeeserviceService', () => {
  let service: EmployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(EmployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  let request : Employee={
    id: 8,
    employeeName: '',
    phoneNumber: '',
    address: '',
    email: '',
    gender: '',
    designationId: 4,
    memberSince: new Date()
  }
  it('chech',()=>
  {
    expect(service.getAllEmployees.length).toEqual(0);
    expect(service.addEmployee(request)).toBeTrue;
    expect(service.updateEmployee(5,request)).toBeTrue;
  });
});
