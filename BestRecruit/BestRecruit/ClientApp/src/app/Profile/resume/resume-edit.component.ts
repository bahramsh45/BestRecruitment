import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
import { resumeService } from '../../shared/services/resume.service';
import { Resume } from '../class/resume';
import { Ng2IzitoastService } from 'ng2-izitoast';



@Component({
  selector: 'resume-edit',
  templateUrl: './resume-edit.component.html'
})
export class ResumeComponent implements OnInit {

  public resume: Resume;
  id: number;
  flag: boolean;
  fileName: string;

  constructor(private router: Router,
    public iziToast: Ng2IzitoastService,
    private activatedRoute: ActivatedRoute,
    private dataService: resumeService,
    private vs: ValidationStyleService) {
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate(["/profile/resumeView"]);
  }

  upLoad(files) {
      this.flag = true;
      this.fileName = files[0].name;
      this.dataService.Upload(files);
  }

  getFileName() {
    var p = this.fileName.lastIndexOf('\\');
    var f = this.fileName.substring(p + 1, this.fileName.length);
    return f;
  }
  

  
  actionOnSubmit(form, res) {
    if (form.valid && this.flag) {
      if (res.id == 0 || res.id == undefined) {
        res.path = this.fileName;
        this.dataService.AddResume(res)
      }
      else {
        this.dataService.PutResume(res)
      }

      this.router.navigate(["/profile/resumeView"]);
    }
  }

  ngOnInit() {
    this.flag = false;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.dataService.getResume(this.id).subscribe(res => {
        this.resume = this.id == 0 ? new Resume() : res;
        this.fileName = res.path;
      });

    });

  }
  
}


