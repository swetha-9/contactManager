import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactsComponent } from './container/create_contacts/create-contacts/create-contacts.component';
import { ListcontactsComponent } from './container/lists_of_contacts/listcontacts/listcontacts.component';
import { ViewcontactComponent } from './container/view_contact/viewcontact/viewcontact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    component: ListcontactsComponent
  },
  {
    path: 'createContacts',
    component: CreateContactsComponent
  },
  {
    path: 'viewContacts',
    component: ViewcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
