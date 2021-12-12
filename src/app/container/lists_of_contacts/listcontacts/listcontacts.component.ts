import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactmanagerService } from '../../../../../src/app/shared/service/contactmanager.service';

@Component({
  selector: 'app-listcontacts',
  templateUrl: './listcontacts.component.html',
  styleUrls: ['./listcontacts.component.css']
})
export class ListcontactsComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['salutation', 'first_name', 'last_name', 'email','phone','designation'];
  constructor(private contactSrv: ContactmanagerService, private router: Router) { }

  ngOnInit(): void {
   this.contactSrv.getContactList().subscribe((contactLists) => {
    this.dataSource = contactLists;
   });
 }

 navigateToCreate() {
  this.router.navigate(["createContacts"]);
 }

}
