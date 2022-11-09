import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddPaymentRuleComponent } from './add-payment-rule.component';

describe('AddPaymentRuleComponent', () => {
  let component: AddPaymentRuleComponent;
  let fixture: ComponentFixture<AddPaymentRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ AddPaymentRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
