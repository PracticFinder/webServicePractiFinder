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
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./components/Profile/profile.component";
import {TableProfileContentComponent} from "./components/Profile/table-profile-content/table-profile-content.component";
import {LoginComponent} from "./components/login/login.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RememberPasswordComponent } from './components/remember-password/remember-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ToolbarService} from "./services/toolbar.service";
import {LocalToolbarServiceService} from "./services/local-toolbar-service.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MisPostulacionesComponent,
    SoporteComponent,
    NotificacionesComponent,
    ChatBoxComponent,
    ProfileComponent,
    TableProfileContentComponent,
    LoginComponent,
    SignUpComponent,
    RememberPasswordComponent,
    NavbarComponent
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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [ToolbarService, LocalToolbarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
