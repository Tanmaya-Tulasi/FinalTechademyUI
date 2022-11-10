import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddrequestleaveComponent } from './addrequestleave.component';

describe('AddrequestleaveComponent', () => {
  let component: AddrequestleaveComponent;
  let fixture: ComponentFixture<AddrequestleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [HttpClientModule,
        RouterTestingModule],
      declarations: [ AddrequestleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrequestleaveComponent);
   component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
