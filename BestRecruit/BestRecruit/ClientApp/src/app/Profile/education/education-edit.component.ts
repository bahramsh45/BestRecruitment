import { Component, AfterViewChecked, OnInit} from '@angular/core';
import { Education } from '../class/education';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { educationService } from '../../shared/services/education-service';
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: educationService, private vs: ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/educationView"]);
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }


  actionOnSubmit(edu) {

    if (edu.id == 0 || edu.id == undefined) {
      this.dataService.AddEducation(edu)
    }
    else {
      this.dataService.PutEducation(edu)
    }

    this.router.navigate(["/profile/educationView"]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.dataService.getEducation(this.id).subscribe(res => {
        this.education = this.id == 0 ? new Education() : res;
      });

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
