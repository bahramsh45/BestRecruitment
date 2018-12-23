
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class experienceService  {
  _baseurl: string;
 
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;

  }

  getExperiences() :any {
    let params = new HttpParams().set("id", "2")
    return this.http.get(this._baseurl + 'api/Candidate/GetCandidateExperiences', { params: params });
  }

  getExperience(id): any {
    let params = new HttpParams().set("id", id);
    return this.http.get(this._baseurl + 'api/Candidate/GetCandidateExperience', { params: params });
  }

  
}
