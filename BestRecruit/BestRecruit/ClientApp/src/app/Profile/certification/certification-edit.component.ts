import { Component, OnInit } from '@angular/core';
import { candidateService } from '../../shared/services/candidate.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certification } from '../class/certification';
import { ValidationStyleService } from '../../shared/services/validation.style.service';

@Component({
  selector: 'certification-edit',
  templateUrl: './certification-edit.component.html'
})
export class CertificationComponent implements OnInit {

  public certification: Certification;
  id: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: candidateService, private vs: ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/certificationView"]);
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  actionOnSubmit(form, c) {


    if (c.id == 0 || c.id == undefined) {
      this.dataService.CVM.candidateCertification.push(c);
      this.dataService.PutCandidate(this.dataService.CVM);
    }
    else {
      let cert = this.dataService.CVM.candidateCertification.find(x => x.id == c.id);
      cert = c;
      this.dataService.PutCandidate(this.dataService.CVM)
    }
    
    this.router.navigate(["/profile/certificationView"]);

    
  }


  ngOnInit() {
    this.certification = new Certification();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      if (this.dataService.CVM.candidateCertification && this.id != 0) {
        this.certification = this.dataService.CVM.candidateCertification.find(item => {
          return item.id == this.id;
        })
      }
    });
    
  }


}

