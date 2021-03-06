import { NgModule, ModuleWithProviders } from '@angular/core';
import { experienceService } from './services/experience.service';
import { educationService } from './services/education-service';
import { certificationService } from './services/certification.service';
import { skillService } from './services/skill-service';
import { ValidationStyleService } from './services/validation.style.service';
import { candidateService } from './services/candidate.service';
import { resumeService } from './services/resume.service';
import { localStorageService } from './services/storage.service';


@NgModule()
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {  
      ngModule: SharedModule,
      providers: [
                  experienceService,
                  educationService,
                  certificationService,
                  skillService,
                  ValidationStyleService,
                  candidateService,
                  resumeService,
                  localStorageService
                 
                 ]
    };
  }
}
