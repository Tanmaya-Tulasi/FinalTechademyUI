import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrequestleaveComponent } from './addrequestleave.component';

describe('AddrequestleaveComponent', () => {
  let component: AddrequestleaveComponent;
  let fixture: ComponentFixture<AddrequestleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
