
import { Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experience } from '../../Profile/class/experience';
import { Subject } from 'rxjs/Subject'
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';






@Injectable()
export class experienceService  {
  _baseurl: string;
  private experienceList : Experience[];
  private _explist = new Subject();
  expList$ = this._explist.asObservable();

  constructor(private storage: localStorageService, private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }


  formatDate(d:string):Date {
    var st = new Date(d);
    return new Date(st.getFullYear() + '-' + ((st.getMonth() + 1).toString().length == 1 ? "0" + (st.getMonth() + 1).toString() : (st.getMonth() + 1).toString()) + '-' + (st.getDate().toString().length == 1 ? "0" + st.getDate().toString() : st.getDate().toString()));
  }

  getExperiences(): any {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<Experience[]>(this._baseurl + 'api/CandidateExperience/GetCandidateExperiences/' + CandidateInfo[0].candidateId).subscribe(res => {
      this.experienceList = res;
      this.notify();
    });
  }

  getExperience(Id): any {
    return this.http.get<Experience>(this._baseurl + 'api/CandidateExperience/GetCandidateExperience/' + Id);
  }

  DeleteExperience(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateExperience/DeleteCandidateExperience/' + id).
      subscribe(() => {
        this.iziToast.show({ title: "'Experience removed successfully!", position: "topRight", backgroundColor: "lime" });

        var idx = this.experienceList.findIndex(x => x.id == id);
        this.experienceList.splice(idx, 1);
       
        this.notify();
      },
        err => {
          alert(err.message);
        });
  }

  AddExperience(experience: Experience): any {
   
    let headers = new HttpHeaders().set('content-type', 'application/json');
    experience.startDate = this.formatDate(experience.startDate.toString());
    experience.endDate = this.formatDate(experience.endDate.toString());
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || [];
    experience.candidateId = CandidateInfo[0].candidateId;
    
    return this.http.post(this._baseurl + 'api/CandidateExperience', experience, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "New experience added successfully!", position: "topRight", backgroundColor: "lime" });
       
         experience.id = Object.keys(data).map(function (key) { return data[key] })[0];
         this.experienceList.push(experience);
         this.notify();
     
      },
      err => {
        alert(err.message);
      });
     
  }

  PutExperience(experience: Experience): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    experience.startDate = this.formatDate(experience.startDate.toString());
    experience.endDate = this.formatDate(experience.endDate.toString());

    return this.http.put(this._baseurl + 'api/CandidateExperience', experience, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "Experience updated successfully!", position: "topRight", backgroundColor: "lime" });

       
        experience.id = Object.keys(data).map(function (key) { return data[key] })[0];
        experience.candidateId = Object.keys(data).map(function (key) { return data[key] })[1];
        experience.employerName = Object.keys(data).map(function (key) { return data[key] })[2];
        experience.startDate = Object.keys(data).map(function (key) { return data[key] })[3];
        experience.endDate = Object.keys(data).map(function (key) { return data[key] })[4];
        experience.description = Object.keys(data).map(function (key) { return data[key] })[5];
        var idx = this.experienceList.findIndex(x => x.id == experience.id);
        this.experienceList[idx] = experience;

        this.notify();
      },
        err => {
          alert(err.message);
        });

    
  }

  private notify() {
    this._explist.next(this.experienceList);
  }
  
}
