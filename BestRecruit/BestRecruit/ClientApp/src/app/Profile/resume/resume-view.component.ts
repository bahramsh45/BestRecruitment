import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { Resume } from '../class/resume';


@Component({
  selector: 'resume-view',
  templateUrl: './resume-view.component.html'
})
export class ResumeViewComponent implements OnInit {

  public resumeList: Resume[];
 

  constructor(private router: Router, public dataService: candidateService) {

  }

  deleteResume(id) {
    //this.dataService.DeleteResume(id);
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

    return s === true ? "public" : "private";

  }

  ngOnInit() {

    this.resumeList = this.dataService.CVM.candidateResume;
  }


}


