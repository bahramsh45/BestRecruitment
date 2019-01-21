
import { Injectable, Inject } from '@angular/core';
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CandidateViewModel } from '../../Profile/class/candidateViewModel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';




@Injectable()
export class candidateService {

  _baseurl: string;
  public candidateVW: CandidateViewModel = new CandidateViewModel();
  private _cVW = new BehaviorSubject<CandidateViewModel>(this.candidateVW);
  _cVW$ = this._cVW.asObservable();


  constructor(private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
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
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<CandidateViewModel>(this._baseurl + 'api/Candidates/GetCandidate/' + CandidateInfo[0].candidateId);
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

  PostCandidate(candidateVW: CandidateViewModel): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.http.post(this._baseurl + 'api/Candidates', candidateVW, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidateVW);
        this.iziToast.show({ title: "Your account created successfully!", position: "topRight", backgroundColor:"lime" });
        
      },
        err => {
          alert(err.message);
        });

  }

  PutCandidate(candidateVW: CandidateViewModel): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    candidateVW.candidate.readdyToWorkDate = this.formatDate(candidateVW.candidate.readdyToWorkDate.toString());
    return this.http.put(this._baseurl + 'api/Candidates', candidateVW, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidateVW);
        this.iziToast.show({ title: "Candidate Info updated successfully!", position: "topRight", backgroundColor: "lime" });
  
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
