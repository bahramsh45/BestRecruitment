
import { Component, OnInit } from '@angular/core'
import { Candidate } from './class/candidate'
import { Router } from '@angular/router';



@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html'
})

export class CandidateViewComponent implements OnInit {

  public candidate: Candidate.Candidate;
  public address: Candidate.Address;
  public contact: Candidate.Contact;
  constructor(private router : Router) {
    this.candidate = new Candidate.Candidate();
    this.address = new Candidate.Address();
    this.contact = new Candidate.Contact(); 
  }

  ngOnInit() {
    this.candidate.firstName = "bahram";

  }

  edit() {
    this.router.navigate(["/profile/candidateEdit"]);
   
  }

  

  
}
