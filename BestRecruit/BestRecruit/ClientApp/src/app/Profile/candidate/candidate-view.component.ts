
import { Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { candidateService } from '../../shared/services/candidate.service'
import { EmploymentType } from '../class/employmentType';
import { CandidateViewModel } from '../class/candidateViewModel';



@Component({
  selector: 'candidate-view',
  templateUrl: './candidate-view.component.html'
})

export class CandidateViewComponent implements OnInit  {
  public candidateVW: CandidateViewModel;
  public empList: EmploymentType[];
  constructor(private router: Router, private dataService: candidateService) {
   
  }

  getEmploymentType(p) {
    var result = this.dataService.getEmpType(p);
    return result; 
  }
  
  ngOnInit() {
    this.dataService._cVW$.subscribe(res => {     
        this.candidateVW = res     
    });
    this.empList = this.dataService.getEmpTypeList();
    this.dataService.getCandidate().subscribe(res => {
      this.candidateVW = res    
    });  
  }

  edit() {
    this.router.navigate(["/profile/candidateEdit"]);  
  }

}
