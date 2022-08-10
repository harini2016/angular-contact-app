import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { id: 1, name: 'Joe', lname:'Test', email:'jtmn@gmail.com', phone: '952-256-2589'},
      { id: 2, name: 'Jon', lname:'Tes2', email:'drn@yahoo.com', phone: '735-589-2569' },
      { id: 3, name: 'Will', lname:'Byers', email:'klop@gmail.com', phone: '635-589-2569' },
      { id: 4, name: 'Nancy', lname:'klop', email:'drn@gmail.com', phone: '512-256-2569' },
      { id: 5, name: 'twelve', lname:'dsg', email:'drn@gmail.com', phone: '512-256-2569' },
      { id: 6, name: 'Numm', lname:'Joe', email:'drn@gmail.com', phone: '512-256-2569' },
      { id: 7, name: 'bhy' , lname:'vgd', email:'drn@gmail.com', phone: '512-256-2569'},
      { id: 8, name: 'Dri' , lname:'sedr', email:'drn@gmail.com', phone: '512-256-2569'},
      { id: 9, name: 'Njuu' , lname:'oiii', email:'drn@gmail.com', phone: '512-256-2569'},
      { id: 10, name: 'Jonathan', lname:'vfgh', email:'sdf@gmail.com', phone: '457-125-2569'},
      { id: 11, name: 'Minn', lname:'Yunh', email:'myungn@yahoo.com', phone: '263-258-2569'},
      { id: 12, name: 'plum', lname:'nuj ', email:'mkl@abc.com', phone: '214-256-2569'},
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a contact always has an id.
  // If the contacts array is empty,
  // the method below returns the initial number (11).
  // if the contacts array is not empty, the method below returns the highest
  // contact id + 1.
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }
}
