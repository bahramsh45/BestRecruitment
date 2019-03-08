import { Component, OnInit } from '@angular/core';
import { Education } from '../class/education';
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';


@Component({
  selector: 'education-view',
  templateUrl: './education-view.component.html'
})
export class EducationViewComponent implements OnInit {
  public educationList: Education[];

  constructor(private router: Router, public dataService: candidateService) {

  }

  deleteEducation(id) {
    //this.dataService.DeleteEducation(id);
  }

  

  addEducation() {
    this.router.navigate(["/profile/educationEdit/0"]);
  }

  ngOnInit() {

    this.educationList = this.dataService.CVM.candidateEducation;

  }

  
}
