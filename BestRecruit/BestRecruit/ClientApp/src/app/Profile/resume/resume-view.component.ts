import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { resumeService } from '../../shared/services/resume.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'resume-view',
  templateUrl: './resume-view.component.html'
})
export class ResumeViewComponent implements OnInit {

  public resumeList: Observable<any>;
 

  constructor(private router: Router, public dataService: resumeService) {

  }

  deleteResume(id) {
    this.dataService.DeleteResume(id);
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

    this.resumeList = this.dataService.resList$;
    this.dataService.getResumes();
  }


}


