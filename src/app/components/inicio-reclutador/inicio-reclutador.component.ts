import { Component, OnInit } from '@angular/core';
import { PostulanteService } from '../../services/postulante.service';
import { Postulante } from 'src/app/models/postulante.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-reclutador',
  templateUrl: './inicio-reclutador.component.html',
  styleUrls: ['./inicio-reclutador.component.css']
})
export class InicioReclutadorComponent implements OnInit{
  usuarios: Postulante[] = [];

  constructor(private postulanteService: PostulanteService, private router: Router) {}

  ngOnInit() {
    this.postulanteService.getPostulantes().subscribe(data => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
  verPerfil(usuario: Postulante) {
    // Redirige a la página de perfil del usuario y pasa el objeto completo del usuario
    this.router.navigate(['/perfil', usuario.nombre]);
  }
}
