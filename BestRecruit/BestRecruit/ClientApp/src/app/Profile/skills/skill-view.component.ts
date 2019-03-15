import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../class/skill';
import { candidateService } from '../../shared/services/candidate.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'skill-view',
  templateUrl: './skill-view.component.html'
})
export class SkillViewComponent implements OnInit {

  public sk$: Observable<any>;
  constructor(private router: Router, public dataService: candidateService) {


  }

  deleteSkill(id) {
    this.dataService.deleteCandidateSkill(id);
    this.dataService.CVM.candidateSkill = this.dataService.CVM.candidateSkill.filter(x => {
      return x.id != id;
    });
   
  }

  addSkill() {

    this.router.navigate(["/profile/skillEdit/0"]);
  }

  ngOnInit() {

    this.sk$ = this.dataService._cVW$;

  }
}

