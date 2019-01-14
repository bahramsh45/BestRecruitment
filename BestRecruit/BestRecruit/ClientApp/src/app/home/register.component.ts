
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { candidateService } from '../shared/services/candidate.service';
import { CandidateViewModel } from '../Profile/class/candidateViewModel';
import { Candidate } from '../Profile/class/candidate';
import { Contact } from '../Profile/class/contact';
import { Address } from '../Profile/class/address';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { Ng2IzitoastService } from 'ng2-izitoast';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public candidateVW: CandidateViewModel = new CandidateViewModel();

  constructor(private http: HttpClient, public iziToast: Ng2IzitoastService, private router: Router, private vs: ValidationStyleService, private dataService: candidateService) {
    this.candidateVW.candidate = new Candidate();
    this.candidateVW.contact = new Contact();
    this.candidateVW.address = new Address();
  }

  displayCondition() {
    return this.candidateVW != undefined && this.candidateVW.candidate != undefined && this.candidateVW.contact != undefined;
  }

  upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'api/upload', formData, {
      reportProgress: false,
    });

    this.http.request(uploadReq).subscribe(() => {
      this.iziToast.show({ title: "Your resume uploded successfully!", position: "topRight", backgroundColor: "lime" });
    });
  }  

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate([""]);
  }

  actionOnSubmit(form,candidateVW) {
   if (form.valid) {
     candidateVW.candidate.userName = candidateVW.contact.email;
     this.dataService.PostCandidate(candidateVW);
     this.router.navigate([""]);
    }
  }

}
