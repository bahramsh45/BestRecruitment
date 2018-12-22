
import { Component, OnInit } from '@angular/core'
import { Candidate } from '../class/candidate'
import { Address } from '../class/address'
import { Contact } from '../class/contact'
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service'
import { EmploymentType } from '../class/employmentType';



@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html'
})

export class CandidateViewComponent implements OnInit {

  public candidate: Candidate;
  public address: Address;
  public contact: Contact;
  public empList: EmploymentType[];
  constructor(private router: Router, private dataService: candidateService) {
    
  }

  getEmploymentType(p) {
    var result = this.dataService.getEmpType(p);
    return result;
 
  }

  ngOnInit() {
    this.empList = this.dataService.getEmpTypeList();
    this.dataService.getCandidate().subscribe(res => {
      if (res) {
        this.candidate = res.candidate;
        this.address = res.address;
        this.contact = res.contact;

      }
    });
   // this.contact = this.dataService.getContact(1);
    
  }

  edit() {
    this.router.navigate(["/profile/candidateEdit"]);
   
  }

  

  
}
