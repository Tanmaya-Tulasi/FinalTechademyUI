import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RequestleavedetailsComponent } from './requestleavedetails.component';

describe('RequestleavedetailsComponent', () => {
  let component: RequestleavedetailsComponent;
  let fixture: ComponentFixture<RequestleavedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [
        HttpClientModule,
        RouterTestingModule
      ],
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
