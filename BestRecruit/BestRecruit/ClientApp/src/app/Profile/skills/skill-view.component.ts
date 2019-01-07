import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../class/skill';
import { skillService } from '../../shared/services/skill-service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'skill-view',
  templateUrl: './skill-view.component.html'
})
export class SkillViewComponent implements OnInit {

  public skillList: Observable<any>;
  constructor(private router: Router, public dataService: skillService) {


  }

  deleteSkill(id) {
    this.dataService.DeleteSkill(id);
  }

  addSkill() {

    this.router.navigate(["/profile/skillEdit/0"]);
  }

  ngOnInit() {

    this.skillList = this.dataService.sList$;
    this.dataService.getSkills();

  }
}

