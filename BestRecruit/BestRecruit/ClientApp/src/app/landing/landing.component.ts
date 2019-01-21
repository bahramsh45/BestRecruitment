import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { localStorageService } from '../shared/services/storage.service';

@Component({
  selector: 'Landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  fName: string;
  lName: string;
  public Name: string;
  constructor(private storage: localStorageService,private router: Router, private activatedRoute: ActivatedRoute) {

  }

  actionOnSubmit() {
    this.router.navigate(["/profile"]);
  }

  ngOnInit() {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || [];    
    this.Name = CandidateInfo[0].firstName + " " + CandidateInfo[0].lastName;    
  }
  

}
