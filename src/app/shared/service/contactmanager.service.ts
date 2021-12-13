import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactmanagerService {
   
  private baseUrl = 'http://localhost:3000/list';
  constructor(private http: HttpClient) { }
  getContactList(): any {
     return this.http.get(this.baseUrl);
}
 createContactList(newList): any {
  return this.http.post(this.baseUrl, newList);
}
}
