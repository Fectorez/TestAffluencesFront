import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-time-slot-unavailable',
  templateUrl: './dialog-time-slot-unavailable.component.html',
  styleUrls: ['./dialog-time-slot-unavailable.component.scss']
})
export class DialogTimeSlotUnavailableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogTimeSlotUnavailableComponent>
  ) {}
  
  ngOnInit() {}

  onClose(): void {
    this.dialogRef.close();
  }
}
