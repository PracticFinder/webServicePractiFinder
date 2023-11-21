import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {ToolbarService} from "../../services/toolbar.service";

import {AuthService} from "../../services/Login/Auth.service";
import {Credentials, UserData} from "../../Interfaces/Login";
import {LocalToolbarServiceService} from "../../services/local-toolbar-service.service";
import {jwtDecode} from "jwt-decode";
import {UserService} from "../../services/User/user.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignup() {
    this.router.navigate(['/app-sing-up']);
  }
    loginError: boolean = false;

    constructor(private router: Router, private toolbarService: ToolbarService,
              private loginService:  AuthService, private localService: LocalToolbarServiceService,
              private userService: UserService) {}

  credenciales: Credentials = {
    username: '',
    password: ''
  };

  cambiarVisibilidadToolbar(nuevoValor: boolean, studentValue: boolean) {
    this.localService.guardarMostrarbarStudent(studentValue);
    this.toolbarService.toggleMonstrarbarStudent(studentValue);
    this.toolbarService.toggleMostrarToolbar(nuevoValor);
  }

  ngOnInit(): void {
    this.cambiarVisibilidadToolbar(true,false);
    localStorage.removeItem('usuario');

  }



  irAHome() {
    this.router.navigate(['/inicio']);
  }
  irHomeReclutador() {
    this.router.navigate(['/inicio-business']);
  }

    login() {
        console.log("credenciales", this.credenciales);
        this.loginService.login(this.credenciales).subscribe(
            (res: any) => {
                console.log(res);
                const token = res.token;
                localStorage.setItem('token', token);
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.sub;
                console.log('Decoded id:', userId);

                if (userId) {
                    let userRole: number; // Declara userRole aquí

                    // Obtener el rol del usuario
                    this.userService.getUserByUsername(userId)
                        .then((res: number) => {
                            userRole = res;
                            console.log('User role:', res);

                            // Obtener el usuario
                            return this.userService.getUser(userId);
                        })
                        .then((res) => {
                            localStorage.setItem('usuario', JSON.stringify(res));
                            console.log('User:', res);

                            // Verificar userRole y redirigir
                            if (userRole === 1) {
                                this.router.navigate(['/inicio']);
                                this.cambiarVisibilidadToolbar(false, false);
                            } else if (userRole === 2) {
                                this.router.navigate(['/inicio-business']);
                                this.cambiarVisibilidadToolbar(false, true);
                            }
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                } else {
                    console.error('User ID is undefined');
                }
            },
            (error: any) => {
                console.error('Error en el inicio de sesión:', error);
                this.loginError = true;
            }
        );
    }

}
