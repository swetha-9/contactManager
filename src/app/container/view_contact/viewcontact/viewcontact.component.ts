import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ContactmanagerService } from 'src/app/shared/service/contactmanager.service';


@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  data = null;
  constructor(private contactManagerSrvc: ContactmanagerService, public router: Router) { 
    this.contactManagerSrvc.shareData$.pipe(first())
    .subscribe((value) => {
     if(value) {
      this.data = value;
     }
    });
  }

  ngOnInit(): void {
  }

}
