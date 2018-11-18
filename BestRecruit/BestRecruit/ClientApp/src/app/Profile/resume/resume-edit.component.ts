import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
import { resumeService } from '../../shared/services/resume.service';
import { Resume } from '../class/resume';



@Component({
  selector: 'resume-edit',
  templateUrl: './resume-edit.component.html'
})
export class ResumeComponent implements OnInit {

  public resume: Resume;
  id: number;

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private dataService: resumeService, private vs: ValidationStyleService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate(["/profile/resumeView"]);
  }

  actionOnSubmit(form) {


  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });


    var result = this.dataService.getResume(this.id);
    this.resume = this.id == 0 ? new Resume() : result;

  }
  
}


