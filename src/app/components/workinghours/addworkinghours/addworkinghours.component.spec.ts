import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkinghoursComponent } from './addworkinghours.component';

describe('AddworkinghoursComponent', () => {
  let component: AddworkinghoursComponent;
  let fixture: ComponentFixture<AddworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddworkinghoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddworkinghoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
