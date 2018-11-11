
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProfileMenuComponent } from '../profile-menu/profile-menu.component';
import { SkillComponent } from '../profile/skills/skill-edit.component';
import { ExperienceComponent } from '../profile/experience/experience-edit.component';
import { ProfileComponent } from './Profile.component';
import { CandidateComponent } from './candidate/candidate-edit.component';
import { CandidateViewComponent } from './candidate/candidate-view.component';
import { EducationComponent } from './education/education-edit.component';
import { CertificationComponent } from './certification/Certification-edit.component';
import { ResumeComponent } from './resume/resume-edit.component';
import { ExperienceListComponent } from './experience/experience-view.component';
import { EducationViewComponent } from './education/education-view.component';
import { CertificationViewComponent } from './certification/certification-view.component';
import { SkillViewComponent } from './skills/skill-view.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ResumeViewComponent } from './resume/resume-view.component';





@NgModule({
  declarations: [    
    ProfileMenuComponent,
    ExperienceComponent,
    ExperienceListComponent,
    SkillComponent,
    SkillViewComponent,
    CandidateComponent,
    CandidateViewComponent,
    EducationComponent,
    EducationViewComponent,
    CertificationComponent,
    CertificationViewComponent,
    ResumeComponent,
    ResumeViewComponent,


  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AngularDateTimePickerModule,
    RouterModule.forChild(
      [
        {
          path: 'profile', component: ProfileComponent, children: [
            { path: 'candidateEdit', component: CandidateComponent },
            { path: 'experienceEdit/:id', component: ExperienceComponent },  
            { path: 'experienceView', component: ExperienceListComponent },                               
            { path: 'educationEdit/:id', component: EducationComponent },
            { path: 'educationView', component: EducationViewComponent },
            { path: 'skillEdit/:id', component: SkillComponent },
            { path: 'skillView', component: SkillViewComponent },
            { path: 'candidateView', component: CandidateViewComponent },           
            { path: 'certificationEdit/:id', component: CertificationComponent },
            { path: 'certificationView', component: CertificationViewComponent },
            { path: 'resumeEdit', component: ResumeComponent },
            { path: 'resumeView', component: ResumeViewComponent }
          ]
        }
      ]
    )
  ],
  exports: [ProfileMenuComponent],
  providers: []
})
export class ProfileModule { }
