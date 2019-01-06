import { Component, OnInit } from '@angular/core';
import { Education } from '../class/education';
import { Router } from '@angular/router';
import { educationService } from '../../shared/services/education-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html'
})
export class EducationViewComponent implements OnInit {
  public educationList: Observable<any>;

  constructor(private router: Router, public dataService: educationService) {

  }

  deleteEducation(id) {
    this.dataService.DeleteEducation(id);
  }

  

  addEducation() {
    this.router.navigate(["/profile/educationEdit/0"]);
  }

  ngOnInit() {

    this.educationList = this.dataService.eduList$;
    this.dataService.getEducations();

  }

  
}
