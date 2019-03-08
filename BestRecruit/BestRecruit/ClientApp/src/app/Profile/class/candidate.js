"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = require("./address");
var contact_1 = require("./contact");
var experience_1 = require("./experience");
var education_1 = require("./education");
var skill_1 = require("./skill");
var certification_1 = require("./certification");
var resume_1 = require("./resume");
var Candidate = /** @class */ (function () {
    function Candidate(response) {
        var _this = this;
        if (response) {
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
            this.Id = response.id;
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.relocation = response.relocation;
            this.rate = response.rate;
            this.employmentType = response.employmentType;
            this.notice = response.notice;
            this.readdyToWorkDate = response.readdyToWorkDate;
            this.contactId = response.contactId;
            this.addrId = response.addrId;
            this.authorized = response.authorized;
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
                e.candidateId = _this.Id;
                _this.candidateExperience.push(e);
            });
            response.candidateEducation.map(function (item) {
                var e = new education_1.Education();
                e.id = item.id;
                e.degree = item.degree;
                e.institutionName = item.institutionName;
                e.startDate = item.startDate;
                e.endDate = item.endDate;
                e.candidateId = _this.Id;
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
    return Candidate;
}());
exports.Candidate = Candidate;
//# sourceMappingURL=candidate.js.map