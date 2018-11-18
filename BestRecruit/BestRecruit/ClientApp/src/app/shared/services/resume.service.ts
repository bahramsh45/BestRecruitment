import { Injectable } from '@angular/core';
import { Resume } from '../../Profile/class/resume';

@Injectable()
export class resumeService {

  private rList: Resume[] = [
    {
      id: 1,
      candiadateId: 1001,
      name : '.Net developer',
      path: 'C:\resumes',
      status: 1,
      active: true
    },
    {
      id: 2,
      candiadateId: 1001,
      name: 'Javascript developer',
      path: 'C:\resumes',
      status: 1,
      active: true
    }
  ];
  getResumes(): any {
    return this.rList;
  }

  getResume(id): any {
    return this.rList.filter(x => x.id == id)[0];
  }


}
