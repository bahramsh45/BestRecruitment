import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ProfileModule } from './Profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent }

    ]),
     ProfileModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
