import { Component, Inject, OnInit } from '@angular/core';
import { skillService } from '../../shared/skill-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skill } from '../class/skill';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'skill-edit',
  templateUrl: './skill-edit.component.html'
})
export class SkillComponent implements OnInit {
  public skill: Skill;
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: skillService) {

  }

  cancel() {
    this.router.navigate(["/profile/skillView"]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = params['id'];

    });
    this.skill = this.dataService.getSkill(this.id)
  }
}

