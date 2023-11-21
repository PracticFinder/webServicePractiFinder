import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InicioComponent} from "../components/inicio/inicio.component";
import {MisPostulacionesComponent} from "../components/mis-postulaciones/mis-postulaciones.component";
import {SoporteComponent} from "../components/soporte/soporte.component";
import {ProfileContentComponent} from "../components/Profile/profile-content/profile-content.component";
import {ProfileComponent} from "../components/Profile/profile.component";
import {LoginComponent} from "../components/login/login.component";
import {SignUpComponent} from "../components/sign-up/sign-up.component";
import {RememberPasswordComponent} from "../components/remember-password/remember-password.component";
import {InicioBusinessComponent} from "../components/inicio-business/inicio-business.component";
import {MisPostulantesComponent} from "../components/mis-postulantes/mis-postulantes.component";
import {StepOneComponent} from "../components/mis-postulantes/step-one/step-one.component";
import {ViewPostulanteComponent} from "../components/mis-postulantes/view-postulante/view-postulante.component";

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
  {path: 'inicio-business', component: InicioBusinessComponent},
  {path: 'mis-postulaciones', component: MisPostulacionesComponent},
  {path: 'mis-postulantes', component: MisPostulantesComponent},
  {path: 'step-one', component: StepOneComponent},
  {path: 'view-postulante', component: ViewPostulanteComponent},
  {path: 'soporte', component: SoporteComponent},
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
