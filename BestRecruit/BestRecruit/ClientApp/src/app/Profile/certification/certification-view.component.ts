import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'certification-view',
  templateUrl: './certification-view.component.html'
})
export class CertificationViewComponent implements OnInit {
  public certificationList: Observable<any>;

  constructor(private router: Router, public dataService: candidateService) {

  }

  deleteCertification(id) {
    this.dataService.deleteCandidateCertification(id);
    this.dataService.CVM.candidateCertification = this.dataService.CVM.candidateCertification.filter(x => {
      return x.id != id;
    });
    this.certificationList = this.dataService.CVM.candidateCertification;
  }



  addCertification() {
    this.router.navigate(["/profile/certificationEdit/0"]);
  }


  ngOnInit() {

    this.certificationList  = this.dataService.CVM.candidateCertification;
 

  }
}
