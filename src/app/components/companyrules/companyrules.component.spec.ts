import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyrulesComponent } from './companyrules.component';

describe('CompanyrulesComponent', () => {
  let component: CompanyrulesComponent;
  let fixture: ComponentFixture<CompanyrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ CompanyrulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
