import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationdetailsComponent } from './designationdetails.component';

describe('DesignationdetailsComponent', () => {
  let component: DesignationdetailsComponent;
  let fixture: ComponentFixture<DesignationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule],
      declarations: [ DesignationdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
