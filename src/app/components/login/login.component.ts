import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showSignup() {
    this.router.navigate(['/app-sing-up']);
  }
  constructor(private router: Router, private toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.cambiarVisibilidadToolbar(true);
  }
  cambiarVisibilidadToolbar(nuevoValor: boolean) {
    this.toolbarService.toggleMostrarToolbar(nuevoValor);
  }


  irAHome() {
    this.router.navigate(['/inicio']);
  }
}
