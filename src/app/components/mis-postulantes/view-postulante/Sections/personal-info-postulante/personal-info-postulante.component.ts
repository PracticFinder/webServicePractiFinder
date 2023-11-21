import {Component, Input} from '@angular/core';
import {UserService} from "../../../../../services/User/user.service";

@Component({
  selector: 'app-personal-info-postulante',
  templateUrl: './personal-info-postulante.component.html',
  styleUrls: ['./personal-info-postulante.component.css']
})
export class PersonalInfoPostulanteComponent {
  @Input()
  usuario: any;
  constructor(private usuarioService: UserService) {
  }


}
