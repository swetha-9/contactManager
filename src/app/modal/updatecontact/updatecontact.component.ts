import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactmanagerService } from 'src/app/shared/service/contactmanager.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.css']
})
export class UpdatecontactComponent implements OnInit {
  salutationList = ['Mr', 'Mrs', 'Miss'];
  form: FormGroup;
  isAdded = true;
  isPrimary = this.data.contact_person.is_primary_contact;
  constructor(@Inject(MAT_DIALOG_DATA) public data,
    private dialog: MatDialogRef<any>,
    private fb: FormBuilder,
    private contactManagerSrvc: ContactmanagerService
  ) {
    dialog.disableClose = true;
    this.form = this.fb.group({
      salutation: [data.contact_person.salutation, [Validators.required]],
      firstName: [data.contact_person.first_name, [Validators.required]],
      lastName: [data.contact_person.last_name, Validators.required],
      email: [data.contact_person.email, [Validators.required, Validators.email]],
      phone: [data.contact_person.phone, [Validators.required]],
      mobile: [data.contact_person.mobile],
      designation: [data.contact_person.designation, [Validators.required]],
      department: [data.contact_person.department, [Validators.required]],
      contactId: [data.contact_person.contact_id],
      contactPersonId: [data.contact_person.contact_person_id],
      skype: [data.contact_person.skype, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  accept() {
    this.dialog.close({ event: 'true' });
  }
  updateContactList() {
    const updateList = {
      code: this.data.code,
      message: 'success',
      contact_person: {
        contact_id: Number(this.form.controls.contactId.value),
        contact_person_id: Number(this.form.controls.contactPersonId.value),
        salutation: this.form.controls.salutation.value,
        first_name: this.form.controls.firstName.value,
        last_name: this.form.controls.lastName.value,
        email: this.form.controls.email.value,
        phone: Number(this.form.controls.phone.value),
        mobile: Number(this.form.controls.mobile.value),
        is_primary_contact: this.isPrimary,
        skype: this.form.controls.skype.value,
        designation: this.form.controls.designation.value,
        department: this.form.controls.department.value,
        is_added_in_portal: true
      }
    }
    console.log(this.isPrimary);
    this.contactManagerSrvc.updateContactList(updateList);
    this.dialog.close({ event: 'true' });
  }
  navigateToList() {
    this.dialog.close({ event: 'true' });
  }
}
