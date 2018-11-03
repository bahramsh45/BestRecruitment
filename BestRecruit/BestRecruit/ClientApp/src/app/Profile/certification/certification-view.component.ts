import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Certification } from '../class/certification';
import { certificationService } from '../../shared/certification-sevice';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'certification-view',
  templateUrl: './certification-view.component.html'
})
export class CertificationViewComponent implements OnInit {

  public certificationList: Certification[];
  constructor(private router: Router, public dataService: certificationService) {

  }


  addCertification() {

    this.router.navigate(["/profile/certificationEdit/0"]);
  }

  ngOnInit() {

    this.certificationList = this.dataService.getCertifications();

  }
}
