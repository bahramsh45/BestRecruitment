
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { candidateService } from '../shared/services/candidate.service';
import { Candidate} from '../Profile/class/candidate';
import { Contact } from '../Profile/class/contact';
import { Address } from '../Profile/class/address';
import { Ng2IzitoastService } from 'ng2-izitoast';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  public candidate: Candidate = new Candidate();

  constructor(public iziToast: Ng2IzitoastService, private router: Router, private vs: ValidationStyleService, private dataService: candidateService) {
    this.candidate = new Candidate();
    this.candidate.contact = new Contact();
    this.candidate.address = new Address();
  }

  displayCondition() {
    return this.candidate != undefined  && this.candidate.contact != undefined;
  }

  upload(files) {
    this.dataService.uploadResume("",files);
  }  

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate([""]);
  }

  actionOnSubmit(form,candidate) {
    if (form.valid) {
      this.dataService.register(candidate);
     this.router.navigate([""]);
    }
  }

}
