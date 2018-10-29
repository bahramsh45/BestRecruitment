import { Component } from '@angular/core';
import { Education } from '../class/education';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { educationService } from '../../shared/education-service';


@Component({
  selector: 'education-edit',
  templateUrl: './education-edit.component.html'
})
export class EducationComponent {
  
  public education: Education;
  id: number;


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
}
