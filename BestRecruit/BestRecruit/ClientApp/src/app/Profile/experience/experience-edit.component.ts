
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
 

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: experienceService) {

  }

  cancel() {
    this.router.navigate(["/profile/experienceView"]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });

   this.experience = this.dataService.getExperience(this.id)

  };



}
