
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



@NgModule({
  declarations: [    
    ProfileMenuComponent,
    ExperienceComponent,
    SkillComponent,
    CandidateComponent,
    CandidateViewComponent,
    EducationComponent,
    CertificationComponent,
    ResumeComponent
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(
      [
        {
          path: 'profile', component: ProfileComponent, children: [
            { path: 'candidateEdit', component: CandidateComponent },
            { path: 'experience', component: ExperienceComponent },
            { path: 'education', component: EducationComponent },
            { path: 'skill', component: SkillComponent },
            { path: 'candidateView', component: CandidateViewComponent },           
            { path: 'certification', component: CertificationComponent },
            { path: 'resume', component: ResumeComponent }
          ]
        }
      ]
    )
  ],
  exports: [ProfileMenuComponent]
})
export class ProfileModule { }
