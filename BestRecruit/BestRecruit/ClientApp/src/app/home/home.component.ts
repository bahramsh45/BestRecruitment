import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationStyleService } from '../shared/services/validation.style.service';
import { userInfo } from '../Profile/class/userInfo';
import { candidateService } from '../shared/services/candidate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public userinfo: userInfo = new userInfo();
  constructor(private router: Router, private vs: ValidationStyleService,private dataService: candidateService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  actionOnSubmit(form) {
    if (form.valid) {
      this.dataService.LoginUser(this.userinfo.userName, this.userinfo.passWord).subscribe(pass => {
        if (pass > 0) {
          this.router.navigate(["/landing"]);
        }
      })    
    }
  }
  

}
