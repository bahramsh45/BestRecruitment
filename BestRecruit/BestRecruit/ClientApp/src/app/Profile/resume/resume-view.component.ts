import { Component, OnInit } from '@angular/core';
import { Resume } from '../class/resume'
import { Router } from '@angular/router';
import { resumeService } from '../../shared/services/resume.service';


@Component({
  selector: 'resume-view',
  templateUrl: './resume-view.component.html'
})
export class ResumeViewComponent implements OnInit {

  public resumeList: Resume[];

  constructor(private router: Router, public dataService: resumeService) {

  }

  addResume() {

    this.router.navigate(["/profile/resumeEdit/0"]);
  }

  getActive(a) {
    if (a == true) {
      return "fa fa-check-circle";
    }
    return "fa fa-times-circle";
  }

  getStatus(s) {
    if (s == 1) {;
      return "public";
    } if (s == 2) {
      return "private";
    }

  }

  ngOnInit() {

    this.resumeList = this.dataService.getResumes();
  }


}


