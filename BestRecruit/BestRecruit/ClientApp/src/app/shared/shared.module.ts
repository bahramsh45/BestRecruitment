import { NgModule, ModuleWithProviders } from '@angular/core';
import { experienceService } from './experience.service';
import { educationService } from './education-service';


@NgModule()
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {  
      ngModule: SharedModule,
      providers: [experienceService,educationService]
    };
  }
}
