import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CheckService } from '../check.service';
import { DialogTimeSlotUnavailableComponent } from '../dialog-time-slot-unavailable/dialog-time-slot-unavailable.component';

interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {
  times: Time[] = [];
  selectedTime = '';
  selectedDate = '';
  animal = '';
  name = '';

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private checkService: CheckService
  ) { }

  ngOnInit(): void {
    for ( let i = 0 ; i < 24 ; i++ ) {
      const h = i < 10 ? '0' + i : i;
      this.times.push({value: h + ':00:00', viewValue: h + ':00'});
      this.times.push({value: h + ':30:00', viewValue: h + ':30'});
    }
  }

  onSubmit(): void {
    const date = moment(this.selectedDate).format('YYYY-MM-DD');
    this.checkService.checkTimeSlot(date, this.selectedTime).subscribe(availability => {
      if ( availability.available ) {
        this.router.navigateByUrl(`/book?date=${moment(this.selectedDate).format('YYYY-MM-DD')}&time=${this.selectedTime}`);
      }
      else {
        this.dialog.open(DialogTimeSlotUnavailableComponent, {
          width: '250px'
        });
      }        
    })
  }
}
