
import { Address } from "./address";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skill } from "./skill";
import { Certification } from "./certification";
import { Resume } from "./resume";

export class Candidate {
  
  Id: number;
  firstName: string;
  lastName: string;
  addrId: number;
  contactId: number;
  authorized: boolean;
  relocation: boolean;
  employmentType: number;
  rate: number;
  salary: number;
  readdyToWorkDate: Date;
  notice: string;
  userId: string;
  email: string;
  note: string;
  candidateExperience: Experience[];
  candidateEducation: Education[];
  candidateSkill: Skill[];
  candidateCertification: Certification[];
  candidateResume: Resume[];
  address: Address;
  contact: Contact;

  constructor(response?: any) {
    if (response) {
      this.address = new Address();
      this.address.id = response.addrId;
      this.address.address1 = response.address.address1;
      this.address.address2 = response.address.address2;
      this.address.city = response.address.city;
      this.address.country = response.address.country;
      this.address.postalCode = response.address.postalCode;

      this.contact = new Contact();
      this.contact.id = response.contactId;
      this.contact.phoneNumber = response.contact.phoneNumber;
      this.contact.email = response.contact.email;
      this.contact.mobile = response.contact.mobile;
      this.contact.skypId = response.contact.skypId;

      this.Id = response.id;
      this.email = response.email;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.relocation = response.relocation;
      this.rate = response.rate;
      this.employmentType = response.employmentType;
      this.notice = response.notice;
      this.userId = response.userId;
      this.readdyToWorkDate = response.readdyToWorkDate;
      this.contactId = response.contactId;
      this.addrId = response.addrId;
      this.authorized = response.authorized;
      this.note = response.note;
      this.candidateSkill = new Array<Skill>();
      this.candidateExperience = new Array<Experience>();
      this.candidateEducation = new Array<Education>();
      this.candidateCertification = new Array<Certification>();
      this.candidateResume = new Array<Resume>();

      response.candidateSkill.map((item) => {
        let s = new Skill();
        s.id = item.id;
        s.candidateId = item.candidateId;
        s.skillName = item.skillName;
        s.lastYearUsed = item.lastYearUsed;
        s.yearsOfExperience = item.yearsOfExperience;
        this.candidateSkill.push(s);

      });
      response.candidateExperience.map((item) => {
        let e = new Experience();
        e.id = item.id;
        e.employerName = item.employerName;
        e.description = item.description;
        e.startDate = item.startDate;
        e.endDate = item.endDate;
        e.candidateId = this.Id;
        this.candidateExperience.push(e);

      });
      response.candidateEducation.map((item) => {
        let e = new Education();
        e.id = item.id;
        e.degree = item.degree;
        e.institutionName = item.institutionName;
        e.startDate = item.startDate;
        e.endDate = item.endDate;
        e.candidateId = this.Id;
        this.candidateEducation.push(e);

      });

      response.candidateCertification.map((item) => {
        let c = new Certification();
        c.id = item.id;
        c.certificationName = item.certificationName;
        c.candidateId = item.candidateId;
        c.year = item.year
        this.candidateCertification.push(c);

      });

      response.candidateResume.map((item) => {
        let r = new Resume();
        r.id = item.id;
        r.active = item.active;
        r.name = item.name;
        r.path = item.path;
        r.status = item.status;
        this.candidateResume.push(r);
      });

    }
    };
  
}
