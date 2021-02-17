import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBookingOkComponent } from './dialog-booking-ok.component';

describe('DialogBookingOkComponent', () => {
  let component: DialogBookingOkComponent;
  let fixture: ComponentFixture<DialogBookingOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBookingOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBookingOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
