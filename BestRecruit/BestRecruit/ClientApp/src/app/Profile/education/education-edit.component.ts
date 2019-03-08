import { Component, AfterViewChecked, OnInit} from '@angular/core';
import { Education } from '../class/education';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
declare var $: any;

@Component({
  selector: 'education-edit',
  templateUrl: './education-edit.component.html'
})
export class EducationComponent implements OnInit, AfterViewChecked {
  
  public education: Education;
  id: number;

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: candidateService, private vs: ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/educationView"]);
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }


  actionOnSubmit(edu) {
    if (edu.id == 0 || edu.id == undefined) {
      this.dataService.CVM.candidateEducation.push(edu);
      this.dataService.PutCandidate(this.dataService.CVM);
    }
    else {
      let ed = this.dataService.CVM.candidateEducation.find(x => x.id == edu.id);
      ed = edu;
      this.dataService.PutCandidate(this.dataService.CVM)
    }

    this.router.navigate(["/profile/educationView"]);
  }


  ngOnInit() {

    this.education = new Education();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.dataService.CVM.candidateEducation && this.id != 0) {
        this.education = this.dataService.CVM.candidateEducation.find(item => {
          return item.id == this.id;
        })
      }
    });
    
  }
  ngAfterViewChecked() {

    $('.wc-date-container').each(function (i, v) {
      var $this = $(this);
      $this.css('border-color', 'silver')
        .css('border-radius', '4px');
      $this.find('span').css('color', 'black');

    })
  }
}
