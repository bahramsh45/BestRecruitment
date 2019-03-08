
import { Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service'
import { EmploymentType } from '../class/employmentType';
import { Candidate } from '../class/candidate';
import { localStorageService } from '../../shared/services/storage.service';



@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html'
})

export class CandidateViewComponent implements OnInit  {
  public candidate: Candidate;
  public empList: EmploymentType[];
  constructor(private router: Router, private storage: localStorageService, private dataService: candidateService) {
   
  }

  getEmploymentType(p) {
    var result = this.dataService.getEmpType(p);
    return result; 
  }
  
  ngOnInit() {
  
    this.empList = this.dataService.getEmpTypeList();
    this.candidate = this.dataService.CVM;
    
  }

  edit() {
    this.router.navigate(["/profile/candidateEdit"]);  
  }

}
