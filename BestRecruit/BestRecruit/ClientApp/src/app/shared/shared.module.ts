import { NgModule, ModuleWithProviders } from '@angular/core';
import { experienceService } from './services/experience.service';
import { educationService } from './services/education-service';
import { certificationService } from './services/certification-sevice';
import { skillService } from './services/skill-service';
import { ValidationStyleService } from './services/validation.style.service';



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
                  ValidationStyleService
                 ]
    };
  }
}
