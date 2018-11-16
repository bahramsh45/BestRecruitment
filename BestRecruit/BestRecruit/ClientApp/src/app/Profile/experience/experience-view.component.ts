import { Component, OnInit } from '@angular/core';
import { Experience } from '../class/experience';
import { Router } from '@angular/router';
import { experienceService } from '../../shared/services/experience.service';


@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  providers: []
})
export class ExperienceViewComponent implements OnInit {

  public experienceList: Experience[];
 

  constructor(private router: Router, public dataService: experienceService) {

  }

  addExperience() {
  
    this.router.navigate(["/profile/experienceEdit/0"]);
  }

  ngOnInit() {

    this.experienceList = this.dataService.getExperiences();

  }
  
}
