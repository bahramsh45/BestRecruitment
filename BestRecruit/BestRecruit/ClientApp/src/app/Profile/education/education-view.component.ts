import { Component, OnInit } from '@angular/core';
import { Education } from '../class/education';
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html'
})
export class EducationViewComponent implements OnInit {
 
  public edu$: Observable<any>;

  constructor(private router: Router, public dataService: candidateService) {

  }

  deleteEducation(id) {
    this.dataService.deleteCandidateEducation(id);
    this.dataService.CVM.candidateEducation = this.dataService.CVM.candidateEducation.filter(x => {
      return x.id != id;
    });
   
  }
  
  addEducation() {
    this.router.navigate(["/profile/educationEdit/0"]);
  }

  ngOnInit() {

    this.edu$ = this.dataService._cVW$;

  }

  
}
