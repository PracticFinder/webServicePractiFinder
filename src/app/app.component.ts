import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "./services/toolbar.service";
import {LocalToolbarServiceService} from "./services/local-toolbar-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mostrarToolbar: boolean = true;
  barStudent: boolean = false;

  title = 'BUsquedaPractifinder';

  options =[
    {path:'/inicio',title:'INICIO'},
    {path:'/mis-postulaciones',title:'MIS POSTULACIONES'},
    {path:'/soporte',title:'SOPORTE'},
    {path:'/login',title:'CERRAR SESION'}
  ];

  optionsEmployer =[
    {path:'/inicio-business',title:'INICIO'},
    {path:'/mis-postulantes',title:'MIS POSTULANTES'},
    {path:'/soporte',title:'SOPORTE'},
    {path:'/login',title:'CERRAR SESION'}
  ];

  boottons =[
    {path:'/perfil',title:'person'}
  ]

  constructor(private toolbarService: ToolbarService, private localservice: LocalToolbarServiceService) {
    this.toolbarService.mostrarToolbar$.subscribe(value => {
      this.mostrarToolbar = value;
    });

    this.toolbarService.barStudent$.subscribe(value2 => {
      this.barStudent = value2;
    })
  }


  ngOnInit(): void {
    this.mostrarToolbar = this.localservice.obtenerMostrarToolbar();
    this.barStudent = this.localservice.obtenerMostrarbarStudent();
    console.log(localStorage.getItem('barStudent'));
  }

  //cambiarMostrarToolbar() {
  //  this.mostrarToolbar = !this.mostrarToolbar;
  //  this.localservice.guardarMostrarToolbar(this.mostrarToolbar);
  //}
}
