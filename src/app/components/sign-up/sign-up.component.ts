import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UserData} from "../../Interfaces/Login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: UserData = {
    id: 0,
    name: '',
    mail: '',
    username: '',
    password: '',
    rolID: '',
  };

  repeatPassword: string = '';

  saveUserData() {
    if (this.user.password !== this.repeatPassword) {
      // Lógica para manejar contraseñas que no coinciden
      console.log('Las contraseñas no coinciden');
      return;
    }

    // Lógica para guardar los datos de usuario (puedes enviarlos a un servicio o hacer otra acción)
    console.log('Datos del usuario:', this.user);
  }

  showLogin() {
    this.router.navigate(['/app-login']);
  }
  constructor(private router: Router) {}
}
