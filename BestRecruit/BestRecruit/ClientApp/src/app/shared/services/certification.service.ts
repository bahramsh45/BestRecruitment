
import { Injectable, Inject } from '@angular/core';
import { Certification } from '../../Profile/class/certification';
import { Subject } from 'rxjs/Subject'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';



@Injectable()
export class certificationService {

  _baseurl: string;
  private certificationList: Certification[];
  private _clist = new Subject();
  cList$ = this._clist.asObservable();
  constructor(private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }

  getCertifications(): any {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<Certification[]>(this._baseurl + 'api/CandidateCertification/GetCandidateCertifications/' + CandidateInfo[0].candidateId).subscribe(res => {
      this.certificationList = res;
      this.notify();
    });
  }

  getCertification(Id): any {
    return this.http.get<Certification>(this._baseurl + 'api/CandidateCertification/GetCandidateCertification/' + Id);
  }

  DeleteCertification(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateCertification/DeleteCandidateCertification/' + id).
      subscribe(() => {
        this.iziToast.show({ title: "Certification removed successfully!", position: "topRight", backgroundColor: "lime" });

        var idx = this.certificationList.findIndex(x => x.id == id);
        this.certificationList.splice(idx, 1);

        this.notify();
      },
        err => {
          alert(err.message);
        });
  }

  AddCertification(certification: Certification): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(this._baseurl + 'api/CandidateCertification', certification, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "New Certification added successfully!", position: "topRight", backgroundColor: "lime" });
        certification.id = Object.keys(data).map(function (key) { return data[key] })[0];
        this.certificationList.push(certification);
        this.notify();
      },
        err => {
          alert(err.message);
        });

  }

  PutCertification(certification: Certification): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put(this._baseurl + 'api/CandidateCertification', certification, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "Certification updated successfully!", position: "topRight", backgroundColor: "lime" });
        certification.id = Object.keys(data).map(function (key) { return data[key] })[0];
        certification.candidateId = Object.keys(data).map(function (key) { return data[key] })[1];
        certification.certificationName = Object.keys(data).map(function (key) { return data[key] })[2];
        certification.year = Object.keys(data).map(function (key) { return data[key] })[3];
       
        var idx = this.certificationList.findIndex(x => x.id == certification.id);
        this.certificationList[idx] = certification;

        this.notify();
      },
        err => {
          alert(err.message);
        });
  }
 
  private notify() {
    this._clist.next(this.certificationList);
  }
}
