import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactmanagerService } from '../../../../../src/app/shared/service/contactmanager.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatecontactComponent } from '../../../modal/updatecontact/updatecontact.component';


@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['profile', 'salutation', 'first_name', 'last_name', 'email', 'phone', 'primary', 'designation', 'action'];
  constructor(private contactSrv: ContactmanagerService,
     public router: Router, 
     private dialog: MatDialog) {
      this.contactSrv.updateStatus$
      .subscribe((status) => {
      if(status) {
        this.dataSource = JSON.parse(localStorage.getItem('lists'));
      }
      });
      }

  ngOnInit(): void {
    this.contactSrv.getContactList()
    this.dataSource = JSON.parse(localStorage.getItem('lists'));
  }

  viewList(value) {
   this.contactSrv.shareData(value);
   this.router.navigateByUrl('viewContacts');
  }

  removeAt(removeList) {
  this.contactSrv.removeFromContactList(removeList);
  this.dataSource = JSON.parse(localStorage.getItem('lists'));
  }
  updateList(listToUpdate) {
    this.dialog.open(UpdatecontactComponent, { data: listToUpdate });
  }
}
