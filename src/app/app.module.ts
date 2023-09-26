import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { InicioComponent } from './components/inicio/inicio.component';
import { MisPostulacionesComponent } from './components/mis-postulaciones/mis-postulaciones.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MisPostulacionesComponent,
    SoporteComponent,
    NotificacionesComponent,
    PerfilComponent,
    ChatBoxComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
