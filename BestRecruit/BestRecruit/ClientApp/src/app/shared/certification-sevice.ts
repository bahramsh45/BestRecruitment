import { Injectable } from '@angular/core';

@Injectable()
export class certificationService {

  private eList: any = [
    {
      id: 1,
      candiadateId: 1001,
      certificationName: 'MCSD',
      year: 2016
    },
    {
      id: 2,
      candiadateId: 1001,
      certificationName: 'MCP',
      year: 2014
    },
    {
      id: 3,
      candiadateId: 1001,
      certificationName: 'MCSE',
      year: 2010
    },
  ];
  getCertifications(): any {
    return this.eList;
  }

  getCertification(id): any {
    return this.eList.filter(x => x.id == id)[0];
  }


}
