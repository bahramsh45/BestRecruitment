import { Injectable } from '@angular/core';

@Injectable()
export class educationService {

  private eList: any = [
    {
      id: 1,
      candiadateId: 1001,
      instutitionName: 'MIT',
      startDate: new Date(2018, 1, 1),
      endDate: new Date(2018, 12, 12),
      degree: 'software engineering'
    },
    {
      id: 2,
      candiadateId: 1001,
      instutitionName: 'Oxford',
      startDate: new Date(2017, 1, 1),
      endDate: new Date(2017, 12, 1),
      degree: 'Electronics engineer'
    },
    {
      id: 3,
      candiadateId: 1001,
      instutitionName: 'Humber college',
      startDate: new Date(2016, 1, 1),
      endDate: new Date(2016, 12, 2),
      degree: 'Social worker'
    }
  ];
  getEducations(): any {
    return this.eList;
  }

  getEducation(id): any {
    return this.eList.filter(x => x.id == id)[0];
  }


}
