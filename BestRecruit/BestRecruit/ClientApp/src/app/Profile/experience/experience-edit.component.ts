import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { Candidate } from '../class/candidate';
//import { experienceData } from '../class/experience-data';



@Component({
  selector: 'experience-edit',
  templateUrl: './experience-edit.component.html'

})
export class ExperienceComponent implements OnInit {

  //public experience: Candidate.Experience;
  id: number;
 

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  cancel() {
    this.router.navigate(["/profile/experienceView"]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });

    //let exdata = new experienceData();
    //this.experience = exdata.experience.filter(x => x.id == this.id)[0];
    //this.experience.startDate = this.toDateString(new Date(this.experience.startDate))
    //this.experience.endDate = this.toDateString(new Date(this.experience.endDate))

  };



}
