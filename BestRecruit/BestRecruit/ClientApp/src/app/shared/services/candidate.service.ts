import { Injectable } from '@angular/core';
import { Candidate} from '../../Profile/class/candidate'
import { Address } from '../../Profile/class/address';
import { Contact } from '../../Profile/class/contact';

@Injectable()
export class candidateService {

  private candidate: Candidate = {
    candiadateId: 1001,
    firstName: 'bahram',
    lastName: 'shams',
    addrId: 1,
    contactId: 1,
    authorized: true,
    relocation: false,
    employmentType: 'Contract',
    rate: 100,
    salary: 0,
    readyToWorkDate: new Date(2019, 2, 1),
    notice: '2 weeks',
    note: ''

  }

  private address: Address = {
    id: 1,
    candiadateId: 1001,
    address1: '36 princeton gate',
    address2: '',
    country: 'canada',
    city: 'Vaughan',
    postalCode: 'L6A 2R7'
  }

  private contact: Contact = {

    id: 1,
    candiadateId: 1001,
    phoneNumber: '4168226853',
    mobile: '4168226853',
    fax: '',
    email: 'bahram_sh@hotmail.com',
    skypId: '',
    notes: ''

  }

  getCandidate(): any {
    return this.candidate;
  }

  getAddress(id): any {
    return  this.address;
  }

  getContact(id): any {
    return this.contact;
  }


}
