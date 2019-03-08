
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Experience } from '../class/experience';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
declare var $: any;


@Component({
  selector: 'experience-edit',
  templateUrl: './experience-edit.component.html'
 
})
export class ExperienceComponent implements OnInit, AfterViewChecked  {
  
  public experience: Experience;
  id: number;

  
  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public dataService: candidateService,private vs : ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/experienceView"]);
  }

  actionOnSubmit(exp) {

    if (exp.id == 0 || exp.id == undefined) {
      this.dataService.CVM.candidateExperience.push(exp);
      this.dataService.PutCandidate(this.dataService.CVM);
    }
    else {
      let ec = this.dataService.CVM.candidateExperience.find(x => x.id == exp.id);
      ec = exp;
      this.dataService.PutCandidate(this.dataService.CVM)
    }

    this.router.navigate(["/profile/experienceView"]);
  }
  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }



  ngOnInit() {
    this.experience = new Experience();
   
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.dataService.CVM.candidateExperience && this.id != 0) {
        this.experience  = this.dataService.CVM.candidateExperience.find(item => {
          return item.id == this.id;
        })
      }
    });

  };

  ngAfterViewChecked() {
    
    $('.wc-date-container').each(function (i, v) {
      var $this = $(this);
      $this.css('border-color', 'silver')
        .css('border-radius', '4px');
      $this.find('span').css('color', 'black');

    })

   
  }



}
