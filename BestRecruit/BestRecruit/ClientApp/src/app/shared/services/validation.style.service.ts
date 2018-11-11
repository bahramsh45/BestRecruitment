import { Injectable } from '@angular/core';

@Injectable()
export class ValidationStyleService {

  getStyle(f, form) {
    if ((!f.valid && !f.pristine)) {
      return '#a94442';
    }
    if (form && !f.valid) {
      return '#a94442';
    }
    return 'silver';
  }


}
