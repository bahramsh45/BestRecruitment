import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'Landing',
  templateUrl: './landing.component.html'
 // styles:["./landing.component.css"]
})
export class LandingComponent {

  constructor(private router: Router) {

  }

  actionOnSubmit() {
    this.router.navigate(["/profile"]);
  }
  

}
