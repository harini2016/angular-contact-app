import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ContactService } from '../contact.service';
import { CONTACTS } from '../mock-contacts';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let contactService;
  let getContactsSpy;

  beforeEach(waitForAsync(() => {
    contactService = jasmine.createSpyObj('ContactService', ['getContacts']);
    getContactsSpy = contactService.getContacts.and.returnValue(of(CONTACTS));
    TestBed
        .configureTestingModule({
          declarations: [HomeComponent],
          imports: [RouterTestingModule.withRoutes([])],
          providers: [{provide: ContactService, useValue: contactService}]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Contact App" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Contact App');
  });

  it('should call contactService', waitForAsync(() => {
       expect(getContactsSpy.calls.any()).toBe(true);
     }));

});
