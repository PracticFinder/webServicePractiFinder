import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {ToolbarService} from "../../services/toolbar.service";
import {LoginService} from "../../services/Login/login.service";
import {Credentials, UserData} from "../../Interfaces/Login";
import {LocalToolbarServiceService} from "../../services/local-toolbar-service.service";
import {jwtDecode} from "jwt-decode";
import {UserService} from "../../services/user.service";


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
              private loginService:  LoginService, private localService: LocalToolbarServiceService,
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
    this.loginService.login(this.credenciales)
      .subscribe(
        (res: any) => {
          console.log(res);
          const token = res.token; // Asumiendo que el token se encuentra en una propiedad 'token' en la respuesta
          const decodedToken = jwtDecode(token);
          console.log('Decoded token:', decodedToken);
          const userId = decodedToken.sub; // Ejemplo: si el token contiene un campo 'email'
          console.log('Decoded token:', userId);

          const user= {
           idRoles: 1
          };

            let datosUsuario: any = {};

            this.userService.getUsuario().subscribe((data: any) => {
                datosUsuario = data;

                const usuarioGuardado =  JSON.stringify(datosUsuario);
                localStorage.setItem('usuario', usuarioGuardado);
                console.log("usuario guardado", usuarioGuardado);
            });

            console.log("daa", datosUsuario);
          if (user.idRoles == 1) {
            this.router.navigate(['/inicio']);
            this.cambiarVisibilidadToolbar(false, false);
          } else if (user.idRoles == 2) {
            this.router.navigate(['/inicio-business']);
            this.cambiarVisibilidadToolbar(false, true);
          }
        },

        (error: any) => {
          console.error('Error en el inicio de sesión:', error);
        }
      );
  }

}
