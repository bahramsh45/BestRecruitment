"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var candidate_1 = require("./candidate");
var address_1 = require("./address");
var contact_1 = require("./contact");
var experience_1 = require("./experience");
var education_1 = require("./education");
var skill_1 = require("./skill");
var certification_1 = require("./certification");
var resume_1 = require("./resume");
var CandidateViewModel = /** @class */ (function () {
    function CandidateViewModel(response) {
        var _this = this;
        if (response) {
            this.candidate = new candidate_1.Candidate();
            this.address = new address_1.Address();
            this.address.id = response.addrId;
            this.address.address1 = response.address.address1;
            this.address.address2 = response.address.address2;
            this.address.city = response.address.city;
            this.address.country = response.address.country;
            this.address.postalCode = response.address.postalCode;
            this.contact = new contact_1.Contact();
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
            this.candidateSkill = new Array();
            this.candidateExperience = new Array();
            this.candidateEducation = new Array();
            this.candidateCertification = new Array();
            this.candidateResume = new Array();
            response.candidateSkill.map(function (item) {
                var s = new skill_1.Skill();
                s.id = item.id;
                s.skillName = item.skillName;
                _this.candidateSkill.push(s);
            });
            response.candidateExperience.map(function (item) {
                var e = new experience_1.Experience();
                e.id = item.id;
                e.employerName = item.employerName;
                e.description = item.description;
                e.startDate = item.startDate;
                e.endDate = item.endDate;
                e.candidateId = _this.candidate.Id;
                _this.candidateExperience.push(e);
            });
            response.candidateEducation.map(function (item) {
                var e = new education_1.Education();
                e.id = item.id;
                e.degree = item.degree;
                e.institutionName = item.institutionName;
                e.startDate = item.startDate;
                e.endDate = item.endDate;
                e.candidateId = _this.candidate.Id;
                _this.candidateEducation.push(e);
            });
            response.candidateCertification.map(function (item) {
                var c = new certification_1.Certification();
                c.id = item.id;
                c.certificationName = item.certificationName;
                c.candidateId = item.candidateId;
                c.year = item.year;
                _this.candidateCertification.push(c);
            });
            response.candidateResume.map(function (item) {
                var r = new resume_1.Resume();
                r.id = item.id;
                r.active = item.active;
                r.name = item.name;
                r.path = item.path;
                r.status = item.status;
                _this.candidateResume.push(r);
            });
        }
    }
    ;
    return CandidateViewModel;
}());
exports.CandidateViewModel = CandidateViewModel;
//# sourceMappingURL=candidateViewModel.js.map