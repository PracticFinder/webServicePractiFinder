import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "../components/inicio/inicio.component";
import {MisPostulacionesComponent} from "../components/mis-postulaciones/mis-postulaciones.component";
import {SoporteComponent} from "../components/soporte/soporte.component";
import {NotificacionesComponent} from "../components/notificaciones/notificaciones.component";
import {ChatBoxComponent} from "../components/chat-box/chat-box.component";
import {PerfilComponent} from "../components/perfil/perfil.component";


const routes: Routes =[
  {path: 'inicio', component: InicioComponent},
  {path: 'mis-postulaciones', component: MisPostulacionesComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'notificaciones', component: NotificacionesComponent},
  {path: 'messages', component: ChatBoxComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: InicioComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
