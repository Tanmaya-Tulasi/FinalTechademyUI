import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthserviceService } from './authservice.service';

describe('AuthserviceService', () => {
  let service: AuthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('checking base url',()=>
  {
    expect(service.baseurl).toEqual('https://localhost:44379/api/');
  })
});
