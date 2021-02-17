import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTimeSlotUnavailableComponent } from './dialog-time-slot-unavailable.component';

describe('DialogTimeSlotUnavailableComponent', () => {
  let component: DialogTimeSlotUnavailableComponent;
  let fixture: ComponentFixture<DialogTimeSlotUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTimeSlotUnavailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTimeSlotUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
