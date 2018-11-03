
import { Injectable } from '@angular/core';

@Injectable()
export class experienceService  {

  private expList: any = [
    {
      id: 1,
      candiadateId: 1001,
      employer: 'CIBC',
      startDate: new Date(2018, 1, 1),
      endDate: new Date(2018, 12, 12),
      description: 'very bad company'
    },
    {
      id: 2,
      candiadateId: 1001,
      employer: 'IBM',
      startDate: new Date(2017, 1, 1),
      endDate: new Date(2017, 12, 1),
      description: 'very good company'
    },
    {
      id: 3,
      candiadateId: 1001,
      employer: 'Fedex',
      startDate: new Date(2016, 1, 1),
      endDate: new Date(2016, 12, 2),
      description: 'nice!'
    }
  ];
  getExperiences() :any {
    return this.expList;
  }

  getExperience(id): any {
    return this.expList.filter(x => x.id == id)[0];
  }

  
}