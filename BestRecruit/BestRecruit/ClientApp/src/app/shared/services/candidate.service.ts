import { Toaster_Token } from './ToasterService';
import { Injectable, Inject } from '@angular/core';
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CandidateViewModel } from '../../Profile/class/candidateViewModel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class candidateService {

  _baseurl: string;
  public candidateVW: CandidateViewModel = new CandidateViewModel();
  private _cVW = new BehaviorSubject<CandidateViewModel>(this.candidateVW);
  _cVW$ = this._cVW.asObservable();


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, @Inject(Toaster_Token) private _toasterService: any) {
    this._baseurl = baseUrl;
  }

  
  private empType: EmploymentType[] = [
    { id: 1, description: "Full Time" },
    { id: 2, description: "Part Time" },
    { id: 3, description: "Contract" }
  ]


  getCandidate(): any {
    let id = 2;
    return this.http.get<CandidateViewModel>(this._baseurl + 'api/Candidates/GetCandidate/' + id);
  }


  getEmpTypeList(): EmploymentType[] {
      return this.empType;
  }

  getEmpType(id): string {
    var result = "";
    this.empType.map(function (t) {

      if (t.id == id) {
        result = t.description;
      }

    })
    return result;
  }

  PutCandidate(candidateVW: CandidateViewModel): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.put(this._baseurl + 'api/Candidates', candidateVW, { headers: headers }).
      subscribe(data => {
        this.BroadCast(candidateVW);
        this._toasterService.success('Candidate Info updated successfully!');

      },
        err => {
          alert(err.message);
        });


  }

   BroadCast(cvw:any) {
    this._cVW.next(cvw);
  
  }


}
