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
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { AddSkillDialogComponent } from './components/Profile/Sections/SkillSection/add-skill-dialog/add-skill-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { PersonalInfoComponent } from './components/Profile/Sections/PersonalInfoSection/personal-info/personal-info.component';
import { SkillInfoComponent } from './components/Profile/Sections/SkillSection/skill-info/skill-info.component';
import { CertificationInfoComponent } from './components/Profile/Sections/CertificationsSection/certification-info/certification-info.component';
import { ExperienceInfoComponent } from './components/Profile/Sections/ExperienceSection/experience-info/experience-info.component';
import { EditCertificacionDialogComponent } from './components/Profile/Sections/CertificationsSection/edit-certificacion-dialog/edit-certificacion-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ExperienceDialogComponent } from './components/Profile/Sections/ExperienceSection/experience-dialog/experience-dialog.component';
import { LanguagesInfoComponent } from './components/Profile/Sections/LanguagesSection/languages-info/languages-info.component';
import { LanguageDialogComponent } from './components/Profile/Sections/LanguagesSection/language-dialog/language-dialog.component';
import {MatSelectModule} from "@angular/material/select";
import { MisPostulantesComponent } from './components/mis-postulantes/mis-postulantes.component';
import {InicioBusinessComponent} from "./components/inicio-business/inicio-business.component";
import {UserService} from "./services/user.service";
import {BusinessService} from "./services/business.service";
import { CreateDialogComponent } from './components/inicio-business/create-dialog/create-dialog.component';
import { EditBusinessDialogComponent } from './components/inicio-business/edit-business-dialog/edit-business-dialog.component';
import { StepOneComponent } from './components/mis-postulantes/step-one/step-one.component';
import { ViewPostulanteComponent } from './components/mis-postulantes/view-postulante/view-postulante.component';
import { ProfilePostulanteComponent } from './components/mis-postulantes/view-postulante/profile-postulante/profile-postulante.component';
import { TablePostulanteContentComponent } from './components/mis-postulantes/view-postulante/table-postulante-content/table-postulante-content.component';
import { CertificationPostulanteComponent } from './components/mis-postulantes/view-postulante/Sections/certification-postulante/certification-postulante.component';
import { ExperiencePostulanteComponent } from './components/mis-postulantes/view-postulante/Sections/experience-postulante/experience-postulante.component';
import { LanguagePostulanteComponent } from './components/mis-postulantes/view-postulante/Sections/language-postulante/language-postulante.component';
import { PersonalInfoPostulanteComponent } from './components/mis-postulantes/view-postulante/Sections/personal-info-postulante/personal-info-postulante.component';
import { SkillPostulanteComponent } from './components/mis-postulantes/view-postulante/Sections/skill-postulante/skill-postulante.component';
import {LoginService} from "./services/Login/login.service";
import {BaseService} from "./services/base.service";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MisPostulacionesComponent,
    SoporteComponent,
    ProfileComponent,
    TableProfileContentComponent,
    LoginComponent,
    SignUpComponent,
    RememberPasswordComponent,
    NavbarComponent,
    AddSkillDialogComponent,
    PersonalInfoComponent,
    SkillInfoComponent,
    CertificationInfoComponent,
    ExperienceInfoComponent,
    EditCertificacionDialogComponent,
    ExperienceDialogComponent,
    LanguagesInfoComponent,
    LanguageDialogComponent,
    InicioBusinessComponent,
    MisPostulantesComponent,
    CreateDialogComponent,
    EditBusinessDialogComponent,
    StepOneComponent,
    ViewPostulanteComponent,
    ProfilePostulanteComponent,
    TablePostulanteContentComponent,
    CertificationPostulanteComponent,
    ExperiencePostulanteComponent,
    LanguagePostulanteComponent,
    PersonalInfoPostulanteComponent,
    SkillPostulanteComponent,
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
    MatDialogModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [ToolbarService, LocalToolbarServiceService, UserService, BusinessService, LoginService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
