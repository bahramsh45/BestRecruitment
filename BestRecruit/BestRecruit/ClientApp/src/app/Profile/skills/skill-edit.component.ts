import { Component, OnInit } from '@angular/core';
import { candidateService } from '../../shared/services/candidate.service';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: candidateService, private vs: ValidationStyleService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  cancel() {
    this.router.navigate(["/profile/skillView"]);
  }

  actionOnSubmit(form, sk) {



    if (form.valid) {
      if (sk.id == 0 || sk.id == undefined) {
        this.dataService.CVM.candidateSkill.push(sk);
        this.dataService.PutCandidate(this.dataService.CVM);
      }
      else {
        this.dataService.CVM.experience = sk;
        let cs = this.dataService.CVM.candidateSkill.find(x => x.id == sk.id);
        cs = sk;
        this.dataService.PutCandidate(this.dataService.CVM)
      }

      this.router.navigate(["/profile/skillView"]);
    }
  }

  ngOnInit() {
    this.skill = new Skill();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.dataService.CVM.candidateSkill && this.id != 0) {
        this.skill = this.dataService.CVM.candidateSkill.find(item => {
          return item.id == this.id;
        })
      }
    });
  }
}

