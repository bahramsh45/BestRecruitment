import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../class/skill';
import { candidateService } from '../../shared/services/candidate.service';



@Component({
  selector: 'skill-view',
  templateUrl: './skill-view.component.html'
})
export class SkillViewComponent implements OnInit {

  public skillList: Skill[];
  constructor(private router: Router, public dataService: candidateService) {


  }

  deleteSkill(id) {
    this.dataService.deleteCandidateSkill(id);
    this.dataService.CVM.candidateSkill = this.dataService.CVM.candidateSkill.filter(x => {
      return x.id != id;
    });
    this.skillList = this.dataService.CVM.candidateSkill;
  }

  addSkill() {

    this.router.navigate(["/profile/skillEdit/0"]);
  }

  ngOnInit() {


    this.skillList = this.dataService.CVM.candidateSkill;


  }
}

