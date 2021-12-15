import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactmanagerService {
  public updateStatus$ = new BehaviorSubject<any>(false);
  public shareData$ = new BehaviorSubject<any>(null);
  public mockList = [
    {

      code: 0,
      message: 'success',
      contact_person: {
        contact_id: 1234,
        contact_person_id: 123,
        salutation: 'Mr',
        first_name: 'will',
        last_name: 'smith',
        email: 'ws@gmai.com',
        phone: 1234,
        mobile: 1234,
        is_primary_contact: true,
        skype: 'Zoho',
        designation: 'Developer',
        department: 'IT',
        is_added_in_portal: false
      }
    }
  ];
  constructor() { }

  getContactList(): any {
    if (this.mockList.length === 1) {
      localStorage.setItem('lists', JSON.stringify(this.mockList));
    }
    return this.mockList;
  }

  createContactList(newList) {
    this.mockList = JSON.parse(localStorage.getItem('lists'));
    this.mockList.push(newList);
    localStorage.setItem('lists', JSON.stringify(this.mockList));
    return this.mockList;
  }

  removeFromContactList(removeList) {
    const originalList = JSON.parse(localStorage.getItem('lists'));
    const nonRemovedData = originalList.filter((list) => {
      return list.code !== removeList.code;
    });
    localStorage.setItem('lists', JSON.stringify(nonRemovedData));
  }

  updateContactList(updateList) {
    const originalList = JSON.parse(localStorage.getItem('lists'));
    const updatedList = originalList.filter((list) => {
      if(list.code === updateList.code) {
       list.contact_person.salutation = updateList.contact_person.salutation
       list.contact_person.first_name = updateList.contact_person.first_name
       list.contact_person.last_name = updateList.contact_person.last_name
       list.contact_person.email = updateList.contact_person.email
       list.contact_person.phone = updateList.contact_person.phone
       list.contact_person.mobile = updateList.contact_person.mobile
       list.contact_person.designation = updateList.contact_person.designation
       list.contact_person.department = updateList.contact_person.department 
       list.contact_person.contact_id = updateList.contact_person.contact_id
       list.contact_person.contact_person_id = updateList.contact_person.contact_person_id
       list.contact_person.skype = updateList.contact_person.skype,
       list.contact_person.is_primary_contact = updateList.contact_person.is_primary_contact
      }
      return list;
    });
    localStorage.setItem('lists', JSON.stringify(updatedList));
    this.updateStatus$.next(true);
  }

  shareData(value) {
   this.shareData$.next(value);
  }
}

