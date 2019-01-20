import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { userInfo } from '../Profile/class/userInfo';
import { candidateService } from '../shared/services/candidate.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public userinfo: userInfo = new userInfo();
  public messageShow: boolean = false;
  CandidateInfo = [];
  constructor(@Inject(SESSION_STORAGE) private storage:StorageService,private router: Router, private vs: ValidationStyleService,private dataService: candidateService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }


  cancel() {
    this.router.navigate([""]);
  }

  

  actionOnSubmit(form) {
    if (form.valid) {
      this.dataService.LoginUser(this.userinfo.userName, this.userinfo.passWord).subscribe(candidate => {
        if (candidate) {

          this.CandidateInfo.push({
            candidateId: Object.keys(candidate).map(function (key) { return candidate[key] })[0],
            firstName: Object.keys(candidate).map(function (key) { return candidate[key] })[1],
            lastName: Object.keys(candidate).map(function (key) { return candidate[key] })[2]
          });

          // insert updated array to local storage
          this.storage.set("CandidateInfo", this.CandidateInfo);
          this.messageShow = false;
          this.router.navigate(["/landing"]);
        }
        else {
          this.messageShow = true;
        }
      })    
    }
  }
  

}
