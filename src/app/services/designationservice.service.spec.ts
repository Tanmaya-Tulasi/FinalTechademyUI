import { TestBed } from '@angular/core/testing';

import { DesignationserviceService } from './designationservice.service';

describe('DesignationserviceService', () => {
  let service: DesignationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
