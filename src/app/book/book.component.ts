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
  }

  back(): void {
    this.location.back();
  }

  book(): void {
    this.dialog.open(DialogBookingOkComponent, {
      width: '250px',
      disableClose: true
    });
    console.log('Booked');
    console.log('First name:', this.firstName);
    console.log('Last name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Phone number:', this.phoneNumber);
  }

  get canBook() {
    return this.firstName && this.lastName && this.email && this.conditionsAccepted;
  }
}
