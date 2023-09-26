import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  showLogin() {
    this.router.navigate(['/app-login']);
  }
  constructor(private router: Router) {}
}
