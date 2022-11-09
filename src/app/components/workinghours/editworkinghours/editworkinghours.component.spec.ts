import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EditworkinghoursComponent } from './editworkinghours.component';

describe('EditworkinghoursComponent', () => {
  let component: EditworkinghoursComponent;
  let fixture: ComponentFixture<EditworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ EditworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
