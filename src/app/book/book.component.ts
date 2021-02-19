import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogBookingOkComponent } from '../dialog-booking-ok/dialog-booking-ok.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  date = '';
  time = '';
  saveData = false;
  conditionsAccepted = false;
  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
      this.time = params['time'];
    });
    if ( localStorage.getItem('firstName') ) {
      this.firstName = localStorage.getItem('firstName')!;
      this.lastName = localStorage.getItem('lastName')!;
      this.email = localStorage.getItem('email')!;
      this.phoneNumber = localStorage.getItem('phoneNumber')!;
    }
  }

  back(): void {
    this.location.back();
  }

  book(): void {
    this.dialog.open(DialogBookingOkComponent, {
      width: '250px',
      disableClose: true
    });
    if ( this.saveData ) {
      localStorage.setItem('firstName', this.firstName);
      localStorage.setItem('lastName', this.lastName);
      localStorage.setItem('email', this.email);
      localStorage.setItem('phoneNumber', this.phoneNumber);
    }
    else {
      localStorage.clear();
    }
    console.log('Booked');
    console.log('First name:', this.firstName);
    console.log('Last name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Phone number:', this.phoneNumber);
  }

  get canBook(): boolean {
    return (this.firstName && this.lastName && this.email && this.conditionsAccepted) as boolean;
  }
}
