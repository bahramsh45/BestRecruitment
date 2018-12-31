
import { Injectable, Inject} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experience } from '../../Profile/class/experience';
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'



@Injectable()
export class experienceService  {
  _baseurl: string;
  private experienceList : Experience[];
  private _explist = new Subject();
  expList$ = this._explist.asObservable();

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
   }

  getExperiences() :any {
    let candidateId = 2;
    return this.http.get<Experience[]>(this._baseurl + 'api/CandidateExperience/GetCandidateExperiences/' + candidateId).subscribe(res => {
      this.experienceList = res;
      this.notify();
    });
  }

  getExperience(Id): any {
    return this.http.get<Experience>(this._baseurl + 'api/CandidateExperience/GetCandidateExperience/' + Id);
  }

  DeleteExperience(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateExperience/DeleteCandidateExperience/' + id).
      subscribe(data => {
        
        var idx = this.experienceList.findIndex(x => x.id == id);
        this.experienceList.splice(0, idx);
        
        this.notify();
      },
        err => {
          alert(err.message);
        });
  }

  AddExperience(experience: Experience): any {
   
    let headers = new HttpHeaders().set('content-type', 'application/json');
    experience.candidateId = 2;
    var st = new Date(experience.startDate.toString());
    experience.startDate = new Date(st.getFullYear() + '-' + (st.getMonth().toString().length == 1 ? "0" + st.getMonth().toString() : st.getMonth().toString()) + '-' + (st.getDate().toString().length == 1 ? "0" + st.getDate().toString() : st.getDate().toString()));

    var et = new Date(experience.endDate.toString());
    experience.endDate = new Date(et.getFullYear() + '-' + (et.getMonth().toString().length == 1 ? "0" + et.getMonth().toString() : et.getMonth().toString()) + '-' + (et.getDate().toString().length == 1 ? "0" + et.getDate().toString() : et.getDate().toString()));
    
    return this.http.post(this._baseurl + 'api/CandidateExperience', experience, { headers: headers }).
      subscribe(data => {
         experience.id = Object.keys(data).map(function (key) { return data[key] })[0];
         this.experienceList.push(experience);
         this.notify();
     
      },
      err => {
        alert(err);
      });
     
  }

  PutExperience(experience: Experience): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    var st = new Date(experience.startDate.toString());
    experience.startDate =new Date(st.getFullYear() + '-' + (st.getMonth().toString().length == 1 ? "0" + st.getMonth().toString() : st.getMonth().toString()) + '-' + (st.getDate().toString().length == 1 ? "0" + st.getDate().toString() : st.getDate().toString()));

    var et = new Date(experience.endDate.toString());
    experience.endDate = new Date(et.getFullYear() + '-' + (et.getMonth().toString().length == 1 ? "0" + et.getMonth().toString() : et.getMonth().toString()) + '-' + (et.getDate().toString().length == 1 ? "0" + et.getDate().toString() : et.getDate().toString()));

    return this.http.put(this._baseurl + 'api/CandidateExperience', experience, { headers: headers }).
      subscribe(data => {
        this.notify();
      },
        err => {
          alert(err);
        });

    
  }

  private notify() {
    this._explist.next(this.experienceList);
  }
  
}
