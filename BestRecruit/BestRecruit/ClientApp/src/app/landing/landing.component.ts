import { Component, OnInit,Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'Landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  fName: string;
  lName: string;
  public Name: string;
  constructor(@Inject(SESSION_STORAGE) private storage:StorageService,private router: Router, private activatedRoute: ActivatedRoute) {

  }

  actionOnSubmit() {
    this.router.navigate(["/profile"]);
  }

  ngOnInit() {
    const CandidateInfo = this.storage.get("CandidateInfo") || [];
     
    this.Name = CandidateInfo[0].firstName + " " + CandidateInfo[0].lastName;
    
  }
  

}
