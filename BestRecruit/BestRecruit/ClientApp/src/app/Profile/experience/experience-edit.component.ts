
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Experience } from '../class/experience';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { experienceService } from '../../shared/services/experience.service';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: experienceService,private vs : ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/experienceView"]);
  }

  actionOnSubmit(exp) {

    if (exp.id == 0 || exp.id == undefined) {
      this.dataService.AddExperience(exp)
    }
    else {
      this.dataService.PutExperience(exp)
    }

    this.router.navigate(["/profile/experienceView"]);
  }
  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }



  ngOnInit() {
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id  = params['id'];
      this.dataService.getExperience(this.id).subscribe(res => {
        this.experience = this.id == 0 ? new Experience() : res;
      });

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
