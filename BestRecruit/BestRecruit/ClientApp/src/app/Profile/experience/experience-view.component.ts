import { Component, OnInit } from '@angular/core';
import { Experience } from '../class/experience';
import { Router } from '@angular/router';
import { experienceService } from '../../shared/services/experience.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  providers: []
})
export class ExperienceViewComponent implements OnInit {

  public experienceList: Observable<any>;
 

  constructor(private router: Router, public dataService: experienceService) {
    
  }

  deleteExperience(id) {
    this.dataService.DeleteExperience(id);
  }

  addExperience() {
  
    this.router.navigate(["/profile/experienceEdit/0"]);
  }

  ngOnInit() {

    this.experienceList = this.dataService.expList$;
    this.dataService.getExperiences();
    

  }
  
}
