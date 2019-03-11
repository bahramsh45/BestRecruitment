
import { Injectable, Inject } from '@angular/core';
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Candidate} from '../../Profile/class/candidate';
import { Message } from '../../Profile/class/message';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';


@Injectable()
export class candidateService {
  
  _baseurl: string;
  messageShow: boolean = false;
  public candidate: Candidate = new Candidate();
  public message : Message = new Message();
  private _cVW = new BehaviorSubject<Candidate>(this.candidate);
  private _message = new BehaviorSubject<Message>(this.message);
  _ms$ = this._message.asObservable();
  _cVW$ = this._cVW.asObservable();
  

  constructor(private router: Router,private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;

  }

  private candidate1: Candidate = new Candidate();
  get CVM(): any {
    return this.candidate1;
  }
  set CVM(cvm: any) {
    this.candidate1 = cvm;
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


  getCurrentCandidate() {
  
    this.http.get<any>('https://bestrecruitapi.azurewebsites.net/api/Candidate/GetCurrentCandidate').
      subscribe((data) => {
        if (data.succeeded) {
          let candidate1 = new Candidate(data.data);
          this.CVM = candidate1;
        }
         
       })

  }

  deleteCandidateExperience(id) {

    
    this.http.delete<any>('https://bestrecruitapi.azurewebsites.net//api/Candidate/DeleteExperience?id=' + id).subscribe(x => {

      this.iziToast.show({ title: "The experience deleted successfully!", position: "topRight", backgroundColor: "lime" });

    })
  }

  deleteCandidateEducation(id) {

    this.http.delete<any>('https://bestrecruitapi.azurewebsites.net//api/Candidate/DeleteEducation?id=' + id).subscribe(x => {

      this.iziToast.show({ title: "The education deleted successfully!", position: "topRight", backgroundColor: "lime" });

    })
  }

  deleteCandidateSkill(id) {

    this.http.delete<any>('https://bestrecruitapi.azurewebsites.net//api/Candidate/DeleteSkill?id=' + id).subscribe(x => {

      this.iziToast.show({ title: "The skill deleted successfully!", position: "topRight", backgroundColor: "lime" });

    })
  }

  deleteCandidateCertification(id) {

    this.http.delete<any>('https://bestrecruitapi.azurewebsites.net//api/Candidate/DeleteCertification?id=' + id).subscribe(x => {

      this.iziToast.show({ title: "The certification deleted successfully!", position: "topRight", backgroundColor: "lime" });

    })
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

  postCandidate(candidate: Candidate) {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    this.http.post('https://bestrecruitapi.azurewebsites.net/api/Candidate/Add', candidate, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidate);
        this.iziToast.show({ title: "Your account created successfully!", position: "topRight", backgroundColor: "lime" });

      },
        err => {
          alert(err.message);
        });
  }


  register(candidate) {
    this.http.post("https://bestrecruitapi.azurewebsites.net/api/Auth/Register", { firstName: candidate.firstName, lastNme: candidate.lastName, userName: candidate.email, password: candidate.passWord }).
      subscribe(() => {
        this.postCandidate(candidate);

      }
        ,
        err => {
          alert(err.message);
        });
  
  }

    

  PutCandidate(candidate: Candidate): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    candidate.readdyToWorkDate = this.formatDate(candidate.readdyToWorkDate.toString());
    candidate.candidateExperience.forEach((item, idx) => {
      item.startDate = this.formatDate(item.startDate.toString());
      item.endDate = this.formatDate(item.endDate.toString());
    });
    candidate.candidateEducation.forEach((item, idx) => {
      item.startDate = this.formatDate(item.startDate.toString());
      item.endDate = this.formatDate(item.endDate.toString());
    });
    candidate.userId = candidate.contact.email;
    this.http.put('https://bestrecruitapi.azurewebsites.net/api/Candidate/Update', candidate, { headers: headers }).
      subscribe(() => {
        this.BroadCast(candidate);
        this.iziToast.show({ title: "Candidate Info updated successfully!", position: "topRight", backgroundColor: "lime" });
      },
        err => {
          alert(err.message);
        });
  }


  uploadResume(candidateId,files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'https://bestrecruitapi.azurewebsites.net/api/File/UploadResume?candidateId=' + candidateId , formData, {
      reportProgress: false,
    });

    this.http.request(uploadReq).subscribe((data) => {
     // this.filePath = Object.keys(data).map(function (key) { return data[key] })[6];
      this.iziToast.show({ title: "Your resume uploaded successfully!", position: "topRight", backgroundColor: "lime" });
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
          this.getCurrentCandidate();
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
