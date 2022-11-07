import { TestBed } from '@angular/core/testing';

import { WorkinghoursService } from './workinghours.service';

describe('WorkinghoursService', () => {
  let service: WorkinghoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkinghoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
