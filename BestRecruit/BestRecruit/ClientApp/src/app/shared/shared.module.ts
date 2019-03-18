import { NgModule, ModuleWithProviders } from '@angular/core';
import { ValidationStyleService } from './services/validation.style.service';
import { candidateService } from './services/candidate.service';
import { localStorageService } from './services/storage.service';


@NgModule()
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {  
      ngModule: SharedModule,
      providers: [
                  ValidationStyleService,
                  candidateService,
                  localStorageService
                 ]
    };
  }
}
