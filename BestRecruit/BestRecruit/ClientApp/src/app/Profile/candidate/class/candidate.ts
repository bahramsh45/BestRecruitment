export namespace Candidate {

  export class Candidate {
    firstName: string;
    lastName: string;
    addrId: number;
    contactId: number;
    authorized: boolean;
    relocation: boolean;
    employmentType: string;
    rate: number;
    salary: number;
    readyToWorkDate: Date;
    notice: string;
    note: string;
  }

  export class Contact {
    phoneNumber:	string;
    mobile: string;
    fax : string;
    email: string;
    skypId: string;
    notes: string;
  }

  export class Address {
    address1 : string;
    address2: string;
    country: string;
    city: string;
    postalCode: string;
  }

}
