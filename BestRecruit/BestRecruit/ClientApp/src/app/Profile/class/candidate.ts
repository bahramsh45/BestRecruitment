export namespace Candidate {

  export class Candidate {
    candiadateId: number;
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
    id: number;
    candiadateId: number;
    phoneNumber:	string;
    mobile: string;
    fax : string;
    email: string;
    skypId: string;
    notes: string;
  }

  export class Address {
    id: number;
    candiadateId: number;
    address1 : string;
    address2: string;
    country: string;
    city: string;
    postalCode: string;
  }

  export class Experience {
    id: number;
    candiadateId: number;
    employer: string;
    startDate: Date;
    endDate: Date;
    description: string;
  }

}
