
import { Injectable, Inject } from '@angular/core';
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CandidateViewModel } from '../../Profile/class/candidateViewModel';
import { Message } from '../../Profile/class/message';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';





@Injectable()
export class candidateService {
  
  _baseurl: string;
  messageShow: boolean = false;
  public candidateVW: CandidateViewModel = new CandidateViewModel();
  public message : Message = new Message();
  private _cVW = new BehaviorSubject<CandidateViewModel>(this.candidateVW);
  private _message = new BehaviorSubject<Message>(this.message);
  _ms$ = this._message.asObservable();
  _cVW$ = this._cVW.asObservable();
  

  constructor(private router: Router,private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;

  }

  private candidateVW1: CandidateViewModel = new CandidateViewModel();
  get CVM(): any {
    return this.candidateVW1;
  }
  set CVM(cvm: any) {
    this.candidateVW1 = cvm;
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


  getCandidateByEmail(email : string) {
    let candidateId: number;
    this.http.get<any>('https://bestrecruitapi.azurewebsites.net/api/Candidate/GetByEmail?' + "email=" + email ).
      subscribe((data) => {

       
        let candidateVW1 = new CandidateViewModel(data);
        this.CVM = candidateVW1;
  
         
       })

  }


  getCandidate(candidateId: number): any {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get<CandidateViewModel>(this._baseurl + 'api/Candidates/GetCandidate/' );
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

  PostCandidate(candidateVW: CandidateViewModel) {

    this.http.post("https://bestrecruitapi.azurewebsites.net/api/Auth/Register", { firstName: candidateVW.candidate.firstName, lastNme: candidateVW.candidate.lastName, userName: candidateVW.candidate.userName, password: candidateVW.candidate.passWord }).
      subscribe(() => {

        let headers = new HttpHeaders().set('content-type', 'application/json');

        this.http.post('https://bestrecruitapi.azurewebsites.net/api/Candidate/Add', candidateVW, { headers: headers }).
          subscribe(() => {
            this.BroadCast(candidateVW);
            this.iziToast.show({ title: "Your account created successfully!", position: "topRight", backgroundColor: "lime" });

          },
            err => {
              alert(err.message);
            });
      },
        err => {
          alert(err.message);
        });
  }

  PutCandidate(candidateVW: CandidateViewModel): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    candidateVW.candidate.readdyToWorkDate = this.formatDate(candidateVW.candidate.readdyToWorkDate.toString());
    this.http.put('https://bestrecruitapi.azurewebsites.net/api/Candidate/Update', candidateVW, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidateVW);
        this.iziToast.show({ title: "Candidate Info updated successfully!", position: "topRight", backgroundColor: "lime" });
      },
        err => {
          alert(err.message);
        });


  }

  LoginUser(userName, passWord) {
   
    this.http.post("https://bestrecruitapi.azurewebsites.net/api/Auth/Login/", { userName: userName, password: passWord })
      .subscribe(token => {
        if (token) {
          this.storage.setStorageSignle("Token", token);
          this.router.navigate(["/landing"]);
          this.message = new Message();
          this.message.messageShow = false;
          this._message.next(this.message);
          this.getCandidateByEmail(userName);
        }
        else
        {
          this.message = new Message();
          this.message.messageShow = true;
          this._message.next(this.message);
        }
        
      })
  
  }

   BroadCast(cvw:any) {
     this._cVW.next(cvw);
  }

}
