import { Injectable } from '@angular/core';
import { Experience } from '../../Profile/class/experience';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class listService {

  private data : Experience[];
  // This subject will be used to update the observable
  private list = new Subject();

  // This observable is public so that your components can subscribe
  expList$ = this.list.asObservable();

  private notify() {
    // Call next on the subject with the latest data
    this.list.next(this.data);
  }

}
