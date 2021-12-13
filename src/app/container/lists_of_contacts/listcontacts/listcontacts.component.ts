import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactmanagerService } from '../../../../../src/app/shared/service/contactmanager.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewcontactComponent } from '../../viewcontact/viewcontact.component';

@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['salutation', 'first_name', 'last_name', 'email','phone','designation', 'action'];
  constructor(private contactSrv: ContactmanagerService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
   this.contactSrv.getContactList().subscribe((contactLists) => {
     console.log(contactLists, ".tests");
    this.dataSource = contactLists;
   });
 }

 navigateToCreate() {
  this.router.navigate(["createContacts"]);
 }
 ViewAt(value) {
   console.log(value);
   this.dialog.open(ViewcontactComponent,{data: value});
 }
}
