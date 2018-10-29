
import { Component, OnInit } from '@angular/core'
import { Candidate } from '../class/candidate'
import { Address } from '../class/address'
import { Contact } from '../class/contact'
import { Router } from '@angular/router';


@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html'
})

export class CandidateViewComponent implements OnInit {

  public candidate: Candidate;
  public address: Address;
  public contact: Contact;
  constructor(private router : Router) {
    this.candidate = new Candidate();
    this.address = new Address();
    this.contact = new Contact(); 
  }

  ngOnInit() {
    this.candidate.firstName = "bahram";

  }

  edit() {
    this.router.navigate(["/profile/candidateEdit"]);
   
  }

  

  
}
