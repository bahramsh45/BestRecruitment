import { Injectable, Inject } from '@angular/core';
import { Resume } from '../../Profile/class/resume';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { localStorageService } from '../../shared/services/storage.service';


@Injectable()
export class resumeService {

  _baseurl: string;
  filePath: string;
  private resumeList: Resume[];
  private _reslist = new Subject();
  resList$ = this._reslist.asObservable();
  constructor(private storage: localStorageService,private http: HttpClient, public iziToast: Ng2IzitoastService, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }


  getResumes(): any {
    const CandidateInfo = this.storage.getStorage("CandidateInfo") || []; 
    return this.http.get<Resume[]>(this._baseurl + 'api/CandidateResume/GetCandidateResumes/' + CandidateInfo[0].candidateId).subscribe(res => {
      this.resumeList = res;
      this.notify();
    });
  }


  getResume(Id): any {
    return this.http.get<Resume>(this._baseurl + 'api/CandidateResume/GetCandidateResume/' + Id);
  }


  DeleteResume(id): any {
    return this.http.delete(this._baseurl + 'api/CandidateResume/DeleteCandidateResume/' + id).
      subscribe(() => {
        this.iziToast.show({ title: "Resume removed successfully!", position: "topRight", backgroundColor: "lime" });

        var idx = this.resumeList.findIndex(x => x.id == id);
        this.resumeList.splice(idx, 1);

        this.notify();
      },
        err => {
          alert(err.message);
        });
  }


  Upload(files) {
    if (files.length === 0)
      return;

    const formData = new FormData();

    for (let file of files)
      formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', 'api/upload', formData, {
      reportProgress: false,
    });

    this.http.request(uploadReq).subscribe((data) => {
      this.filePath = Object.keys(data).map(function (key) { return data[key] })[6];
      this.iziToast.show({ title: "Your resume uploaded successfully!", position: "topRight", backgroundColor: "lime" });
    });
  }  

  AddResume(resume: Resume): any {

    resume.path = this.filePath;
    let headers = new HttpHeaders().set('content-type', 'application/json');

   
    return this.http.post(this._baseurl + 'api/CandidateResume', resume, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "New resume added successfully!", position: "topRight", backgroundColor: "lime" });
        resume.id = Object.keys(data).map(function (key) { return data[key] })[0];
        this.resumeList.push(resume);
        this.notify();

      },
        err => {
          alert(err.message);
        });

  }

  PutResume(resume: Resume): any {

    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put(this._baseurl + 'api/CandidateResume', resume, { headers: headers }).
      subscribe(data => {
        this.iziToast.show({ title: "Resume updated successfully!", position: "topRight", backgroundColor: "lime" });
        resume.id = Object.keys(data).map(function (key) { return data[key] })[0];
        resume.candidateId = Object.keys(data).map(function (key) { return data[key] })[1];
        resume.name = Object.keys(data).map(function (key) { return data[key] })[2];
        resume.path = Object.keys(data).map(function (key) { return data[key] })[3];
        resume.active = Object.keys(data).map(function (key) { return data[key] })[4];
        resume.status = Object.keys(data).map(function (key) { return data[key] })[5];
        var idx = this.resumeList.findIndex(x => x.id == resume.id);
        this.resumeList[idx] = resume;

        this.notify();
      },
        err => {
          alert(err.message);
        });


  }

  private notify() {
    this._reslist.next(this.resumeList);
  }

}
