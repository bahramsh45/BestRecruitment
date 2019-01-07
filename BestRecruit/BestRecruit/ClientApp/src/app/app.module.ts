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

import { RegisterComponent } from './home/register.component';
import { Ng2IziToastModule } from 'ng2-izitoast';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    LandingComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    Ng2IziToastModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'landing', component: LandingComponent },


    ]),
     ProfileModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
