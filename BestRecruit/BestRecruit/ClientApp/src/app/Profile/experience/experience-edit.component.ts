
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Experience } from '../class/experience';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { experienceService } from '../../shared/experience.service';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: experienceService) {

  }

  cancel() {
    this.router.navigate(["/profile/experienceView"]);
  }

  actionOnSubmit(form) {

  }
  getStyle(f, form) {
    
    if ((!f.valid && !f.pristine)) {
      return '#a94442';
    }

    if (form && !f.valid) {
      return '#a94442';

    }

    return 'silver';
  }


  ngOnInit() {
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
    var result = this.dataService.getExperience(this.id);
    this.experience = this.id == 0 ? new Experience() : result;
   

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
