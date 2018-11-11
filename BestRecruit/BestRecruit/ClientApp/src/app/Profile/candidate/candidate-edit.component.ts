
import { Component, OnInit } from '@angular/core'
import { Candidate } from '../class/candidate'
import { Address } from '../class/address'
import { Contact } from '../class/contact'
import { Router } from '@angular/router';
import { ValidationStyleService } from '../../shared/services/validation.style.service';


@Component({
  selector: 'candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styles:['./candidate-edit.component.css']
})

export class CandidateComponent implements OnInit {

  public candidate: Candidate;
  public address: Address;
  public contact: Contact;
  public employmentType: string[];


  constructor(private router: Router, private vs: ValidationStyleService) {
    this.candidate = new Candidate();
    this.address = new Address();
    this.contact = new Contact(); 
  }

  cancel() {
    this.router.navigate(["/profile/candidateView"]);

  }
  actionOnSubmit(form) {
   
  }

  getStyle(f,form) {
    return this.vs.getStyle(f, form);
  }

  ngOnInit() {

    this.employmentType = ['Full Time', 'Part Time', 'Contract'];
    //this.candidate.firstName = "bahram";

  }

  

  
}
