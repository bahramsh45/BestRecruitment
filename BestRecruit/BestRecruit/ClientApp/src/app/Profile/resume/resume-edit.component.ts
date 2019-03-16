import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
import { candidateService } from '../../shared/services/candidate.service';
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
    private dataService: candidateService,
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
    this.dataService.uploadResume(this.dataService.CVM.userId, files);
  }

  getFileName() {
    if (this.fileName) {
      var p = this.fileName.lastIndexOf('\\');
      var f = this.fileName.substring(p + 1, this.fileName.length);
      return f;
    }

    return '';
   
  }
  

  
  actionOnSubmit(form, res) {
    if (form.valid && this.flag) {

      if (res.id == 0 || res.id == undefined) {
        res.path = this.fileName;
        this.dataService.CVM.candidateResume.push(res);
        this.dataService.PutCandidate(this.dataService.CVM);
      }
      else {
        let rc = this.dataService.CVM.candidateResume.find(x => x.id == res.id);
        rc = res;
        this.dataService.PutCandidate(this.dataService.CVM)
      }
      
      this.router.navigate(["/profile/resumeView"]);
    }
  }

  ngOnInit() {

    this.resume = new Resume();
    this.flag = false;
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.dataService.CVM.candidateResume && this.id != 0) {
        this.resume = this.dataService.CVM.candidateResume.find(item => {
          return item.id == this.id;
        })
        this.fileName = this.dataService.CVM.candidateResume.path;
      }
    });

  }
  
}


