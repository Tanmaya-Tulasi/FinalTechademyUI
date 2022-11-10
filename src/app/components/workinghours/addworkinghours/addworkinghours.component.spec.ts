import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddworkinghoursComponent } from './addworkinghours.component';

describe('AddworkinghoursComponent', () => {
  let component: AddworkinghoursComponent;
  let fixture: ComponentFixture<AddworkinghoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule,HttpClientModule],
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
