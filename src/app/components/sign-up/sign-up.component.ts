import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserData} from "../../Interfaces/Login";
import {AuthService} from "../../services/Login/Auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: UserData = {
    username: "carlos123",
    name: "Carlos",
    email: "example2@gmail.com",
    password: "carlos123",
    rolId: 2,
  };

  repeatPassword: string = '';
  registrationSuccess: boolean = false;
  passwordMismatch: boolean = false;
  noPermissionMessage: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  async saveUserData() {
    if (this.user.password !== this.repeatPassword) {
      this.passwordMismatch = true;
      this.registrationSuccess = false;
      return;
    }
    this.user.rolId = +this.user.rolId; // Esto convertirá 'rolId' a un número
      console.log('Usuario:', this.user);

    try {
      const response =(await this.authService.register(this.user)).toPromise(); // Espera la resolución de la función register
        if (response === null) {
          this.noPermissionMessage = true;
          return;
        }
        this.registrationSuccess = true;
        this.passwordMismatch = false;
        console.log('Usuario creado con éxito:', this.user);
    } catch (error: any) {
        this.registrationSuccess = false;
        this.passwordMismatch = false;
        this.registrationSuccess =false ;
    }
  }

  showLogin() {
    this.router.navigate(['/app-login']);
  }
}
