import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ToolbarService} from "../../services/toolbar.service";
import {LocalToolbarServiceService} from "../../services/local-toolbar-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignup() {
    this.router.navigate(['/app-sing-up']);
  }
  constructor(private router: Router, private toolbarService: ToolbarService, private localService: LocalToolbarServiceService) {}

  ngOnInit(): void {
    this.cambiarVisibilidadToolbar(true, false);
  }

  cambiarVisibilidadToolbar(nuevoValor: boolean, studentValue: boolean) {
    this.localService.guardarMostrarbarStudent(studentValue);
    this.toolbarService.toggleMonstrarbarStudent(studentValue);
    this.toolbarService.toggleMostrarToolbar(nuevoValor);
  }


  irAHome() {
    this.router.navigate(['/inicio']);
  }
  irHomeReclutador() {
    this.router.navigate(['/inicio-business']);
  }
}
