import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {ToolbarService} from "../../services/toolbar.service";
import { Credentials } from 'src/app/Interfaces/Login';
import {LoginService} from "../../services/Login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignup() {
    this.router.navigate(['/app-sing-up']);
  }
  constructor(private router: Router, private toolbarService: ToolbarService,
              private loginService:  LoginService) {}

  credenciales: Credentials = {
    username: '',
    password: ''
  };


  ngOnInit(): void {
    this.cambiarVisibilidadToolbar(true);
  }
  cambiarVisibilidadToolbar(nuevoValor: boolean) {
    this.toolbarService.toggleMostrarToolbar(nuevoValor);
  }


  irAHome() {
    this.router.navigate(['/inicio']);
  }
  irHomeReclutador() {
    this.router.navigate(['/inicio']);
  }

  login() {
    console.log("credenciales", this.credenciales);
    this.loginService.login(this.credenciales)
        .subscribe(
            (res: any) => {
              console.log(res);
              this.irAHome();
            },
            (error: any) => {
              console.error('Error en el inicio de sesión:', error);
              // Aquí podrías mostrar un mensaje de error al usuario o realizar otra acción apropiada
            }
        );
  }

}
