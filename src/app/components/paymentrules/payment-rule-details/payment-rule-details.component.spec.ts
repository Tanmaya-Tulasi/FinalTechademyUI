import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentRuleDetailsComponent } from './payment-rule-details.component';

describe('PaymentRuleDetailsComponent', () => {
  let component: PaymentRuleDetailsComponent;
  let fixture: ComponentFixture<PaymentRuleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ PaymentRuleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentRuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
