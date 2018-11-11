import { Component, Inject } from '@angular/core';
import { ValidationStyleService } from '../../shared/services/validation.style.service';


@Component({
  selector: 'resume-edit',
  templateUrl: './resume-edit.component.html'
})
export class ResumeComponent {

  constructor(private vs: ValidationStyleService) {

  }

  getStyle(f, form) {
    return this.vs.getStyle(f, form);
  }
  
}


