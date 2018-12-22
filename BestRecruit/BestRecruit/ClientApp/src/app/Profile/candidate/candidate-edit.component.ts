
import { Component, OnInit } from '@angular/core'
import { Candidate } from '../class/candidate'
import { Address } from '../class/address'
import { Contact } from '../class/contact'
import { Router } from '@angular/router';
import { ValidationStyleService } from '../../shared/services/validation.style.service';
import { candidateService } from '../../shared/services/candidate.service';
import { EmploymentType } from '../class/employmentType';


@Component({
  selector: 'candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styles:['./candidate-edit.component.css']
})

export class CandidateComponent implements OnInit {

  public candidate: Candidate;
  public address: Address;
  public contact: Contact;
  public empList: EmploymentType[];

  settings = {
    bigBanner: false,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: false
  }


  constructor(private router: Router, private vs: ValidationStyleService,private dataService: candidateService) {
   
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

    this.empList = this.dataService.getEmpTypeList();
   // this.candidate = this.dataService.getCandidate();
  //  this.address = this.dataService.getAddress(1001);
  //  this.contact = this.dataService.getContact(1001);

  }

  

  
}
