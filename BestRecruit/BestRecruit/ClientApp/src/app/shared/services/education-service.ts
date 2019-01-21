
import { Injectable, Inject } from '@angular/core';
import { Education } from '../../Profile/class/education';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';



@Injectable()
export class educationService {

  _baseurl: string;
  private educationList: Education[];
  private _edulist = new Subject();
  eduList$ = this._edulist.asObservable();
  constructor(private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }

  formatDate(d: string): Date {
    var st = new Date(d);
    return new Date(st.getFullYear() + '-' + ((st.getMonth() + 1).toString().length == 1 ? "0" + (st.getMonth() + 1).toString() : (st.getMonth() + 1).toString()) + '-' + (st.getDate().toString().length == 1 ? "0" + st.getDate().toString() : st.getDate().toString()));
  }

  getEducations(): any {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<Education[]>(this._baseurl + 'api/CandidateEducation/GetCandidateEducations/' + CandidateInfo[0].candidateId).subscribe(res => {
      this.educationList = res;
      this.notify();
    });
  }

  getEducation(Id): any {
    return this.http.get<Education>(this._baseurl + 'api/CandidateEducation/GetCandidateEducation/' + Id);
  }

  DeleteEducation(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateEducation/DeleteCandidateEducation/' + id).
      subscribe(() => {
        this.iziToast.show({ title: "Education removed successfully!", position: "topRight", backgroundColor: "lime" });

        var idx = this.educationList.findIndex(x => x.id == id);
        this.educationList.splice(idx, 1);

        this.notify();
      },
        err => {
          alert(err.message);
        });
  }

  AddEducation(education: Education): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    education.startDate = this.formatDate(education.startDate.toString());
    education.endDate = this.formatDate(education.endDate.toString());


    return this.http.post(this._baseurl + 'api/CandidateEducation', education, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "New education added successfully!", position: "topRight", backgroundColor: "lime" });

        education.id = Object.keys(data).map(function (key) { return data[key] })[0];
        this.educationList.push(education);
        this.notify();

      },
        err => {
          alert(err.message);
        });

  }

  PutEducation(education: Education): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');
    education.startDate = this.formatDate(education.startDate.toString());
    education.endDate = this.formatDate(education.endDate.toString());

    return this.http.put(this._baseurl + 'api/CandidateEducation', education, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "Education updated successfully!", position: "topRight", backgroundColor: "lime" });
  

        education.id = Object.keys(data).map(function (key) { return data[key] })[0];
        education.candidateId = Object.keys(data).map(function (key) { return data[key] })[1];
        education.institutionName = Object.keys(data).map(function (key) { return data[key] })[2];
        education.startDate = Object.keys(data).map(function (key) { return data[key] })[3];
        education.endDate = Object.keys(data).map(function (key) { return data[key] })[4];
        education.degree = Object.keys(data).map(function (key) { return data[key] })[5];
        var idx = this.educationList.findIndex(x => x.id == education.id);
        this.educationList[idx] = education;

        this.notify();
      },
        err => {
          alert(err.message);
        });


  }

 

  private notify() {
    this._edulist.next(this.educationList);
  }
}
