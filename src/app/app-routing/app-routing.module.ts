import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "../components/inicio/inicio.component";
import {MisPostulacionesComponent} from "../components/mis-postulaciones/mis-postulaciones.component";
import {SoporteComponent} from "../components/soporte/soporte.component";
import {NotificacionesComponent} from "../components/notificaciones/notificaciones.component";
import {ChatBoxComponent} from "../components/chat-box/chat-box.component";
import {ProfileContentComponent} from "../components/Profile/profile-content/profile-content.component";
import {ProfileComponent} from "../components/Profile/profile.component";
import {LoginComponent} from "../components/login/login.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {RememberPasswordComponent} from "../components/remember-password/remember-password.component";

const routes: Routes =[
  {
    path: 'app-login', component: LoginComponent
  },
  {
    path: 'app-sing-up', component: SignUpComponent
  },
  {
    path: 'app-remember-password', component: RememberPasswordComponent
  },
  {path: 'inicio', component: InicioComponent},
  {path: 'mis-postulaciones', component: MisPostulacionesComponent},
  {path: 'soporte', component: SoporteComponent},
  {path: 'notificaciones', component: NotificacionesComponent},
  {path: 'messages', component: ChatBoxComponent},
  {path: 'perfil', component: ProfileComponent},
  {
    path: '',
    redirectTo: 'app-login',
    pathMatch: 'full'
  },
  {path: '**', component: LoginComponent},
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        ProfileContentComponent
    ],
    exports: [RouterModule, ProfileContentComponent]
})
export class AppRoutingModule { }
