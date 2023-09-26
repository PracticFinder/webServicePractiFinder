import { Component, OnInit } from '@angular/core';
import {ToolbarService} from "./services/toolbar.service";
import {LocalToolbarServiceService} from "./services/local-toolbar-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarToolbar: boolean = false;

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

  constructor(private toolbarService: ToolbarService, private localservice: LocalToolbarServiceService) {
    this.toolbarService.mostrarToolbar$.subscribe(value => {
      this.mostrarToolbar = value;
    });
  }

  ngOnInit(): void {
    this.mostrarToolbar = this.localservice.obtenerMostrarToolbar();
  }

  cambiarMostrarToolbar() {
    this.mostrarToolbar = !this.mostrarToolbar;
    this.localservice.guardarMostrarToolbar(this.mostrarToolbar);
  }
}
