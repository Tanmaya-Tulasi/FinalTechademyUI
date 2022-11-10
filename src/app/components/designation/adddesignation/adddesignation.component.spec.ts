import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Designation } from 'src/app/models/designation.model';
import { AdddesignationComponent } from './adddesignation.component';

describe('AdddesignationComponent', () => {
  let component: AdddesignationComponent;
  let fixture: ComponentFixture<AdddesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,
        RouterTestingModule],
      declarations: [ AdddesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  let request : Designation = {
    designationID: 0,
    designationName: '',
    departmentName: '',
    roleName: ''
  }
  
});
