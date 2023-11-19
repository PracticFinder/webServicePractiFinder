import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-postulante',
  templateUrl: './profile-postulante.component.html',
  styleUrls: ['./profile-postulante.component.css']
})
export class ProfilePostulanteComponent {
  @Input() imagen: any;
}
