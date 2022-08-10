import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contacts: Contact[];
  contact = {name: '', lname: '', email: '', phone: ''};

  constructor(private contactService: ContactService, private location: Location) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
  }

  add(name: string, lname: string, email: string, phone: string): void {
    name = name.trim();
    lname = lname.trim();
    email = email.trim();
    phone = phone.trim();

    if (!name || !lname || !email || !phone) { return; }
    this.contactService.addContact({ name, lname, email, phone } as Contact)
      .subscribe(contact => {
        this.contacts.push(contact);
        this.location.back();
      });
  }

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact.id).subscribe();
  }

}
