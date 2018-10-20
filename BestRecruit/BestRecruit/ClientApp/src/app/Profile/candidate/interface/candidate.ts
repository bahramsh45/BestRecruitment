export namespace Candidate {

  export interface candidate {
    firstName: string,
    lastName: string,
    addrId: number,
    contactId: number,
    authorized: boolean,
    relocation: boolean,
    employmentType: string,
    rate: number,
    salary: number,
    readyToWorkDate: Date,
    notice: string,
    note: string
  }

  export interface contact {
    phoneNumber:	string,
    mobile: string,
    fax : string,
    email: string,
    skypId: string,
    notes : string
  }

  export interface address {
    address1 : string,
    address2: string,
    country: string,
    city: string,
    postalCode: string
  }

}
