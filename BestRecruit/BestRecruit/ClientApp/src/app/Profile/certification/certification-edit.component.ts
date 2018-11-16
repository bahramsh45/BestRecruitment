import { Component, Inject, OnInit } from '@angular/core';
import { certificationService } from '../../shared/services/certification-sevice';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certification } from '../class/certification';
import { ValidationStyleService } from '../../shared/services/validation.style.service';

//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'certification-edit',
  templateUrl: './certification-edit.component.html'
})
export class CertificationComponent implements OnInit {

  public certification: Certification;
  id: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: certificationService, private vs: ValidationStyleService ) {

  }

  cancel() {
    this.router.navigate(["/profile/certificationView"]);
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  actionOnSubmit(form) {


  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
    this.certification = this.id == 0 ? new Certification() : this.dataService.getCertification(this.id)
  }

  
}

