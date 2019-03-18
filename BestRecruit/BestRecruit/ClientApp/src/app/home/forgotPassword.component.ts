import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { candidateService } from '../shared/services/candidate.service';
import { Candidate } from '../Profile/class/candidate';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  public candidate: Candidate = new Candidate();

  constructor(private router: Router, private vs: ValidationStyleService, private dataService: candidateService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }


  cancel() {
    this.router.navigate(["/login"]);
  }

  actionOnSubmit(form) {
    if (form.valid) {
      this.dataService.forgotPassword(this.candidate.email);
    }
  }

  ngOnInit() {
   
  }
}
