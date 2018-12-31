import { Injectable, Inject } from '@angular/core';
import { Candidate} from '../../Profile/class/candidate'
import { EmploymentType } from '../../Profile/class/employmentType';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class candidateService {

  _baseurl: string;
  candidate: Candidate;

  constructor( private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseurl = baseUrl;
  }

  
  private empType: EmploymentType[] = [
    { id: 1, description: "Full Time" },
    { id: 2, description: "Part Time" },
    { id: 3, description: "Contract" },
  ]


  getCandidate(): any {
    let id = 2;
    return this.http.get<Candidate>(this._baseurl + 'api/Candidates/GetCandidate/' + id)  
  
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


}
