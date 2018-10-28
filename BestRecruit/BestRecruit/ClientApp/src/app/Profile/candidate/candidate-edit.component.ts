
import { Component, OnInit } from '@angular/core'
import { Candidate } from '../class/candidate'
import { Router } from '@angular/router';


@Component({
  selector: 'candidate-edit',
  templateUrl: './candidate-edit.component.html'
})

export class CandidateComponent implements OnInit {

  public candidate: Candidate.Candidate;
  public address: Candidate.Address;
  public contact: Candidate.Contact;
  public employmentType: string[];


  constructor(private router: Router) {
    this.candidate = new Candidate.Candidate();
    this.address = new Candidate.Address();
    this.contact = new Candidate.Contact(); 
  }

  cancel() {
    this.router.navigate(["/profile/candidateView"]);

  }
  actionOnSubmit(form) {
   
   
  
  }

  ngOnInit() {

    this.employmentType = ['Full Time', 'Part Time', 'Contract'];
    //this.candidate.firstName = "bahram";

  }

  

  
}
