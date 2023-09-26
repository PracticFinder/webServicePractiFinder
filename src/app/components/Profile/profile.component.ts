import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  usuario = {
    nombre: 'Nombre del Usuario',
    imagen: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
    edad: 25,
    hobbies: ['Hobby 1', 'Hobby 2', 'Hobby 3']
  };
}
