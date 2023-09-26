import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BUsquedaPractifinder';
  options =[
    {path:'/inicio',title:'INICIO'},
    {path:'/mis-postulaciones',title:'MIS POSTULACIONES'},
    {path:'/soporte',title:'SOPORTE'},
  ];
  boottons =[
    {path:'/notificaciones',title:'notifications'},
    {path:'/messages',title:'comment'},
    {path:'/perfil',title:'person'},
  ]
}
