import { Toaster_Token } from './ToasterService';
import { Injectable, Inject } from '@angular/core';
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  formatDate(d: string): Date {
    var st = new Date(d);
    return new Date(st.getFullYear() + '-' + ((st.getMonth() + 1).toString().length == 1 ? "0" + (st.getMonth() + 1).toString() : (st.getMonth() + 1).toString()) + '-' + (st.getDate().toString().length == 1 ? "0" + st.getDate().toString() : st.getDate().toString()));
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
    candidateVW.candidate.readdyToWorkDate = this.formatDate(candidateVW.candidate.readdyToWorkDate.toString());
    return this.http.put(this._baseurl + 'api/Candidates', candidateVW, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidateVW);
        this._toasterService.success('Candidate Info updated successfully!');

      },
        err => {
          alert(err.message);
        });


  }

  LoginUser(userName, passWord) {
    let params = new HttpParams();
    params = params.append('userName', userName);
    params = params.append('passWord', passWord);
    return this.http.get(this._baseurl + 'api/Candidates/LoginCandidate/', { params: params });
  }


   BroadCast(cvw:any) {
    this._cVW.next(cvw);
  
  }


}
