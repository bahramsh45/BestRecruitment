
import { Injectable, Inject } from '@angular/core';
import { Skill } from '../../Profile/class/skill';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';



@Injectable()
export class skillService {

  _baseurl: string;
  private skillList: Skill[];
  private _slist = new Subject();
  sList$ = this._slist.asObservable();
  constructor(private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }


  getSkills(): any {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<Skill[]>(this._baseurl + 'api/CandidateSkill/GetCandidateSkills/' + CandidateInfo[0].candidateId).subscribe(res => {
      this.skillList = res;
      this.notify();
    });
  }


  getSkill(Id): any {
    return this.http.get<Skill>(this._baseurl + 'api/CandidateSkill/GetCandidateSkill/' + Id);
  }


  DeleteSkill(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateSkill/DeleteCandidateSkill/' + id).
      subscribe(() => {
        this.iziToast.show({ title: "Skill removed successfully!", position: "topRight", backgroundColor: "lime" });

        var idx = this.skillList.findIndex(x => x.id == id);
        this.skillList.splice(idx, 1);

        this.notify();
      },
        err => {
          alert(err.message);
        });
  }

  AddSkill(skill: Skill): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    const CandidateInfo = this.storage.getStorage("CandidateInfo") || [];
    skill.candidateId = CandidateInfo[0].candidateId;
    return this.http.post(this._baseurl + 'api/CandidateSkill', skill, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "New skill added successfully!", position: "topRight", backgroundColor: "lime" });


        skill.id = Object.keys(data).map(function (key) { return data[key] })[0];
        this.skillList.push(skill);
        this.notify();

      },
        err => {
          alert(err.message);
        });

  }

  PutSkill(skill: Skill): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put(this._baseurl + 'api/CandidateSkill', skill, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "Skill updated successfully!", position: "topRight", backgroundColor: "lime" });
        skill.id = Object.keys(data).map(function (key) { return data[key] })[0];
        skill.candidateId = Object.keys(data).map(function (key) { return data[key] })[1];
        skill.skillName = Object.keys(data).map(function (key) { return data[key] })[2];
        skill.yearsOfExperience = Object.keys(data).map(function (key) { return data[key] })[3];
        skill.lastYearUsed = Object.keys(data).map(function (key) { return data[key] })[4];
        var idx = this.skillList.findIndex(x => x.id == skill.id);
        this.skillList[idx] = skill;

        this.notify();
      },
        err => {
          alert(err.message);
        });


  }
 

  private notify() {
    this._slist.next(this.skillList);
  }
}
