import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.css']
})
export class RememberPasswordComponent {
  showLogin() {
    this.router.navigate(['/app-login']);
  }
  constructor(private router: Router) {}
}
