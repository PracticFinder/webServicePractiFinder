import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  usuario: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      console.log('Usuario guardado:', this.usuario);
    }
  }

  updateUsuario(updatedInfo: any): void {
    this.userService.updateUsuario(updatedInfo).subscribe((data: any) => {
      this.usuario = data; // Actualiza la información del usuario con la respuesta del servidor
    });
  }

}
