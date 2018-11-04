import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../class/skill';
import { skillService } from '../../shared/skill-service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'skill-view',
  templateUrl: './skill-view.component.html'
})
export class SkillViewComponent implements OnInit {

  public skillList: Skill[];
  constructor(private router: Router, public dataService: skillService) {


  }

  addSkill() {

    this.router.navigate(["/profile/skillEdit/0"]);
  }

  ngOnInit() {

    this.skillList = this.dataService.getSkills();

  }
}

