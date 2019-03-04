import { Candidate } from "./candidate";
import { Address } from "./address";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skill } from "./skill";
import { Certification } from "./certification";
import { Resume } from "./resume";

export class CandidateViewModel {
  
  candidate: Candidate;
  candidateExperience: Experience[];
  candidateEducation: Education[];
  candidateSkill: Skill[];
  candidateCertification: Certification[];
  candidateResume: Resume[];
  address: Address;
  contact: Contact;

  constructor(response?: any) {
    if (response) {
      this.candidate = new Candidate();
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

      this.candidate.Id = response.id;
      this.candidate.firstName = response.firstName;
      this.candidate.lastName = response.lastName;
      this.candidate.relocation = response.relocation;
      this.candidate.rate = response.rate;
      this.candidate.employmentType = response.employmentType;
      this.candidate.notice = response.notice;
      this.candidate.readdyToWorkDate = response.readdyToWorkDate;
      this.candidate.contactId = response.contactId;
      this.candidate.addrId = response.addrId;
      this.candidate.authorized = response.authorized;
      this.candidateSkill = new Array<Skill>();
      this.candidateExperience = new Array<Experience>();
      this.candidateEducation = new Array<Education>();
      this.candidateCertification = new Array<Certification>();
      this.candidateResume = new Array<Resume>();

      response.candidateSkill.map((item) => {
        let s = new Skill();
        s.id = item.id;
        s.skillName = item.skillName;
        this.candidateSkill.push(s);

      });
      response.candidateExperience.map((item) => {
        let e = new Experience();
        e.id = item.id;
        e.employerName = item.employerName;
        e.description = item.description;
        e.startDate = item.startDate;
        e.endDate = item.endDate;
        e.candidateId = this.candidate.Id;
        this.candidateExperience.push(e);

      });
      response.candidateEducation.map((item) => {
        let e = new Education();
        e.id = item.id;
        e.degree = item.degree;
        e.institutionName = item.institutionName;
        e.startDate = item.startDate;
        e.endDate = item.endDate;
        e.candidateId = this.candidate.Id;
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
