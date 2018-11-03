import { Component, Inject, OnInit } from '@angular/core';
import { certificationService } from '../../shared/certification-sevice';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Certification } from '../class/certification';

//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'certification-edit',
  templateUrl: './certification-edit.component.html'
})
export class CertificationComponent implements OnInit {

  public certification: Certification;
  id: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: certificationService) {

  }

  cancel() {
    this.router.navigate(["/profile/certificationView"]);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];

    });
    this.certification = this.dataService.getCertification(this.id)
  }

  
}

