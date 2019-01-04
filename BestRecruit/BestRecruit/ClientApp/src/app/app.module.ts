import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ProfileModule } from './Profile/profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { Toaster_Token } from './shared/services/ToasterService';

declare let toastr: any; 



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    LandingComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'landing', component: LandingComponent },


    ]),
     ProfileModule
  ],
  
  providers: [{ provide: Toaster_Token, useValue: toastr }],
  bootstrap: [AppComponent]
})
export class AppModule { }
