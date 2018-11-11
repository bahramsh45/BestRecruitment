import { Injectable } from '@angular/core';

@Injectable()
export class skillService {

  private eList: any = [
    {
      id: 1,
      candiadateId: 1001,
      skillName: '.NET Core',
      yearOfExperience: 2016,
      lastYearUsed : 2016
    },
    {
      id: 2,
      candiadateId: 1001,
      skillName: 'ASP.NET MVC',
      yearOfExperience: 2014,
      lastYearUsed: 2016
    },
    {
      id: 2,
      candiadateId: 1001,
      skillName: 'SQL Sever',
      yearOfExperience: 2013,
      lastYearUsed: 2015
    },
    
  ];
  getSkills(): any {
    return this.eList;
  }

  getSkill(id): any {
    return this.eList.filter(x => x.id == id)[0];
  }


}
