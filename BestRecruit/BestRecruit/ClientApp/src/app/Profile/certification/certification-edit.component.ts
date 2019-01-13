import { Component, OnInit } from '@angular/core';
import { certificationService } from '../../shared/services/certification.service';
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


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: certificationService, private vs: ValidationStyleService) {

  }

  cancel() {
    this.router.navigate(["/profile/certificationView"]);
  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }

  actionOnSubmit(c) {

    if (c.id == 0 || c.id == undefined) {
      this.dataService.AddCertification(c)
    }
    else {
      this.dataService.PutCertification(c)
    }

    this.router.navigate(["/profile/certificationView"]);

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.dataService.getCertification(this.id).subscribe(res => {
        this.certification = this.id == 0 ? new Certification() : res;
      });

    });
   
  }


}

