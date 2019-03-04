import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { Observable } from 'rxjs/Observable';
import { Experience } from '../class/experience';



@Component({
  selector: 'experience-view',
  templateUrl: './experience-view.component.html',
  providers: []
})
export class ExperienceViewComponent implements OnInit {

  public experienceList: Experience[];
 

  constructor(private router: Router, public dataService: candidateService) {
    
  }

  deleteExperience(id) {
   // this.dataService.DeleteExperience(id);
  }

  addExperience() {
  
    this.router.navigate(["/profile/experienceEdit/0"]);
  }

  ngOnInit() {

    // this.experienceList = this.dataService.expList$;
    this.experienceList = this.dataService.CVM.candidateExperience;
    

  }
  
}
