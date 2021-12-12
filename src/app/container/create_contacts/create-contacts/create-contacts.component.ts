import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactmanagerService } from 'src/app/shared/service/contactmanager.service';

@Component({
  selector: 'app-create-contacts',
  templateUrl: './create-contacts.component.html',
  styleUrls: ['./create-contacts.component.css']
})
export class CreateContactsComponent implements OnInit {
  salutationList = ['Mr', 'Mrs', 'Miss'];
  form: FormGroup;
  isPrimary = false;
  isAdded = false;
  constructor(private route: Router,private fb: FormBuilder, private contactSrv: ContactmanagerService) {
    this.form = this.fb.group({
      salutation: ['',[Validators.required]],
      firstName: ['',[Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      designation: ['',[Validators.required]],
      department: ['',[Validators.required]],
      contactId: ['',[Validators.required]],
      contactPersonId: ['',[Validators.required]],
      skype: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }
  navigateToList() {
    this.route.navigate(['contacts'])
  }
  createNewContactList() {
    const newList = {
      "code": 0,
      "message": "success",
      "contact_person": {
        "contact_id": Number(this.form.controls.contactId.value),
        "contact_person_id": Number(this.form.controls.contactPersonId.value) ,
        "salutation": this.form.controls.salutation.value,
        "first_name": this.form.controls.firstName.value,
        "last_name": this.form.controls.lastName.value,
        "email": this.form.controls.email.value,
        "phone": Number(this.form.controls.phone.value),
        "mobile": Number(this.form.controls.mobile.value),
        "is_primary_contact": this.isPrimary,
        "skype": this.form.controls.skype.value,
        "designation": this.form.controls.designation.value,
        "department": this.form.controls.department.value,
        "is_added_in_portal": this.isAdded
      }
    }
    console.log(newList);
    this.contactSrv.createContactList(newList).subscribe((value) => console.log(value))
  }
}
