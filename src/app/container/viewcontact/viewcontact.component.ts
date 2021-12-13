import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialogRef<any>) {
    dialog.disableClose = true;
  }

  ngOnInit(): void {
  }
  accept() {
    this.dialog.close({ event: 'true' });
  }
}
