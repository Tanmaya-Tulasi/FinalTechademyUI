import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestleavedetailsComponent } from './requestleavedetails.component';

describe('RequestleavedetailsComponent', () => {
  let component: RequestleavedetailsComponent;
  let fixture: ComponentFixture<RequestleavedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestleavedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestleavedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
