import { Component, OnInit } from '@angular/core';
import { Candidate } from '../class/candidate';
import { Router } from '@angular/router';
import { experienceData } from '../class/experience-data';



@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html'
})
export class ExperienceListComponent implements OnInit {

  public experienceList: Candidate.Experience[];

  constructor(private router: Router) {

  }

  addExperience() {

    this.router.navigate(["/profile/experienceEdit/0"]);
  }

  ngOnInit() {

    this.experienceList = (new experienceData()).experience;
    
    
  }
  
}
