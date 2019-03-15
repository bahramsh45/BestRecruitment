import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { userInfo } from '../Profile/class/userInfo';
import { candidateService } from '../shared/services/candidate.service';
import { Observable } from 'rxjs/Observable';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public userinfo: userInfo = new userInfo();
  public messageShow: Observable<any>;
  CandidateInfo = []; 
  constructor(private router: Router, private vs: ValidationStyleService, private dataService: candidateService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }


  cancel() {
    this.router.navigate([""]);
  }

  actionOnSubmit(form) {
    if (form.valid) {
      this.dataService.LoginUser(this.userinfo.userName, this.userinfo.passWord);
      this.messageShow = this.dataService._ms$;
    }
  }

  ngOnInit() {
    this.userinfo.passWord = 'Bahr4490@';
  }
}
