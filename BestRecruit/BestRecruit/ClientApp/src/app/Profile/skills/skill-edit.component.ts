import { Component, Inject, OnInit } from '@angular/core';
import { skillService } from '../../shared/services/skill-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skill } from '../class/skill';
import { ValidationStyleService } from '../../shared/services/validation.style.service';


@Component({
  selector: 'skill-edit',
  templateUrl: './skill-edit.component.html'
})
export class SkillComponent implements OnInit {
  public skill: Skill;
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: skillService, private vs: ValidationStyleService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate(["/profile/skillView"]);
  }

  actionOnSubmit(form) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = params['id'];

    });

    var result = this.dataService.getSkill(this.id);
    this.skill = this.id == 0 ? new Skill() : result;

    
  }
}

