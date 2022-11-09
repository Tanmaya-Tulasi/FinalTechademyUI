import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditrequestleaveComponent } from './editrequestleave.component';

describe('EditrequestleaveComponent', () => {
  let component: EditrequestleaveComponent;
  let fixture: ComponentFixture<EditrequestleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ EditrequestleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrequestleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
