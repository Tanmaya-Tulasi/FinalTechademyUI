import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PaymentRules } from '../models/paymenyrules.model';

import { PaymentrulesService } from './paymentrules.service';

describe('PaymentrulesService', () => {
  let service: PaymentrulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
    });
    service = TestBed.inject(PaymentrulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('checking base url',()=> 
  {
    expect(service.baseApiUrl).toEqual('https://localhost:44379/');
  });
  let paymentrule1 :PaymentRules = {
    paymentID: 2,
    paymentRule: 'dont disturb management in case any delay'
  };
  let paymentrule2 :PaymentRules = {
    paymentID: 3,
    paymentRule: 'dont disturb management in case any delay'
  };
  it('checking  add methods',()=>
  {
    
    expect(service.addPaymentRules(paymentrule1)).toBeTruthy();
    expect(service.getAllPaymentRules.call.length).toBeGreaterThanOrEqual(1);

  });
  it('checking update details',()=>
  {
    expect(service.updatePaymentRules(2,paymentrule2)).toBeTrue;
  });
});
