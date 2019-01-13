import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { certificationService } from '../../shared/services/certification.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'certification-view',
  templateUrl: './certification-view.component.html'
})
export class CertificationViewComponent implements OnInit {
  public certificationList: Observable<any>;

  constructor(private router: Router, public dataService: certificationService) {

  }

  deleteCertification(id) {
    this.dataService.DeleteCertification(id);
  }



  addCertification() {
    this.router.navigate(["/profile/certificationEdit/0"]);
  }


  ngOnInit() {

    this.certificationList = this.dataService.cList$;
    this.dataService.getCertifications();

  }
}
