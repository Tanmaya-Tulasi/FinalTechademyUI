
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditdesignationComponent } from './editdesignation.component';

describe('EditdesignationComponent', () => {
  let component: EditdesignationComponent;
  let fixture: ComponentFixture<EditdesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,
        RouterTestingModule],
      declarations: [ EditdesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('undefined id deletion check', ()=>
  {
  expect(component.deleteDesignation(999)).toBeUndefined();
  });
  it('returns get by id check',()=>
  {
     
    let msg = component.designationDetails;
    expect(msg).toBeTruthy();
    expect(msg.designationID).toBeDefined();
  });
});
