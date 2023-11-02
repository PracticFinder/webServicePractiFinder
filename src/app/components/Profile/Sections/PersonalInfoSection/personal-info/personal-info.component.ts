import {Component, Input} from '@angular/core';
import {UserService} from "../../../../../services/user.service";
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
    this.usuarioService.updateUsuario(updatedInfo).subscribe((data: any) => {
    });
  }
}
