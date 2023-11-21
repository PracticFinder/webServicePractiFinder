import {Component, Input} from '@angular/core';
import {UserService} from "../../../../../services/User/user.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  @Input()
  usuario: any;
  constructor(private usuarioService: UserService) {
  }

  actualizarUsuario(updatedInfo: any): void {
    console.log('holaaaa:', updatedInfo);
    localStorage.setItem('usuario', JSON.stringify(updatedInfo));
    this.usuarioService.updateUser(updatedInfo).subscribe((data: any) => {
      this.usuario = data; // Actualiza la información del usuario con la respuesta del servidor
    });
  }
}
