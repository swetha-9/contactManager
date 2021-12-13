import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diaglog-box',
  templateUrl: './diaglog-box.component.html',
  styleUrls: ['./diaglog-box.component.css']
})
export class DiaglogBoxComponent implements OnInit {

  constructor(private dialog: MatDialogRef<DiaglogBoxComponent>, private router: Router) {
    dialog.disableClose = true;
  }

  ngOnInit(): void {
  }
  accept() {
    this.dialog.close({ event: 'true' });
    this.router.navigate(["contacts"]);
  }
}
