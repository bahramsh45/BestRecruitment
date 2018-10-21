
import { Component, OnInit } from '@angular/core'
import { Candidate } from './class/candidate'



@Component({
  selector: 'candidate-edit',
  templateUrl: './candidate-edit.component.html'
})

export class CandidateComponent implements OnInit {

  public candidate: Candidate.Candidate;
  public address: Candidate.Address;
  public contact: Candidate.Contact;
  constructor() {
    this.candidate = new Candidate.Candidate();
    this.address = new Candidate.Address();
    this.contact = new Candidate.Contact(); 
  }

  ngOnInit() {
    this.candidate.firstName = "bahram";

  }

  

  
}
