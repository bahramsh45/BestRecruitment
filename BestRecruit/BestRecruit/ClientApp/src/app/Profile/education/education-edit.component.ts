import { Component, AfterViewChecked, OnInit} from '@angular/core';
import { Education } from '../class/education';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { educationService } from '../../shared/education-service';
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: educationService) {

  }

  cancel() {
    this.router.navigate(["/profile/educationView"]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
    this.education = this.dataService.getEducation(this.id)
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
