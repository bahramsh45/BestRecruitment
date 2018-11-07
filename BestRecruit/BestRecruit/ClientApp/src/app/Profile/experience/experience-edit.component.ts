
import { Component, OnInit } from '@angular/core';
import { Experience } from '../class/experience';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { experienceService } from '../../shared/experience.service';


@Component({
  selector: 'experience-edit',
  templateUrl: './experience-edit.component.html',
})
export class ExperienceComponent implements OnInit {

  public experience: Experience;
  id: number;

  date: Date = new Date();
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
    if ((!f.valid && !f.pristine) || form) {
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



}
