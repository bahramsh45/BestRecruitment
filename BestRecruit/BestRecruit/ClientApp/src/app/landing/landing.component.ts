import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageService } from '../shared/services/storage.service';

@Component({
  selector: 'Landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  fName: string;
  lName: string;
  public Name: string;
  constructor(private storage: localStorageService,private router: Router) {

  }

  actionOnSubmit() {
    this.router.navigate(["/profile"]);
  }

  ngOnInit() {

    let t  = this.storage.getStorage("Token") || [];
    this.Name = t.firstName + ' ' + t.lastName; 
  }
  

}
