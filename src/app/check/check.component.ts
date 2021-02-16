import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    for ( let i = 0 ; i < 24 ; i++ ) {
      this.times.push({value: i + ':00:00', viewValue: i + ':00'});
      this.times.push({value: i + ':30:00', viewValue: i + ':30'});
    }
  }

  onSubmit(): void {
    console.log(this.selectedTime);
    console.log(this.selectedDate.toString());
    console.log(moment(this.selectedDate).format('DD/MM/YYYY'));
    this.router.navigateByUrl(`/book?date=${moment(this.selectedDate).format('YYYY-MM-DD')}&time=${this.selectedTime}`)
  }
}
