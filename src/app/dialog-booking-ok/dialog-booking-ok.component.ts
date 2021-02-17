import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-booking-ok',
  templateUrl: './dialog-booking-ok.component.html',
  styleUrls: ['./dialog-booking-ok.component.scss']
})
export class DialogBookingOkComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogBookingOkComponent>) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
