import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkinghoursComponent } from './editworkinghours.component';

describe('EditworkinghoursComponent', () => {
  let component: EditworkinghoursComponent;
  let fixture: ComponentFixture<EditworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
