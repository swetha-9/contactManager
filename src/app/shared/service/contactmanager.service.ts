import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lists } from 'src/assets/db';

@Injectable({
  providedIn: 'root'
})
export class ContactmanagerService {
   
  private baseUrl = 'http://localhost:3000/list';
  constructor(private http: HttpClient) { }

//   getContactList(): any {
//      return this.http.get('https://invoice.zoho.com/api/v3/contacts');
// }

//  createContactList(newList): any {
//   return this.http.post(this.baseUrl, newList);
// }



getContactList(): any {
  return lists;
}

createContactList(newList) {
lists.push(newList);
return lists;
}
}
