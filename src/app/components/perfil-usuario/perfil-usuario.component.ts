import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // Importa 'Params' desde '@angular/router'
import { PostulanteService } from 'src/app/services/postulante.service';
import { Postulante } from 'src/app/models/postulante.model';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit{
  usuario: Postulante | undefined;
  categoriaSeleccionada: string | undefined;

  mostrarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  rechazarUsuario() {
    // Lógica para rechazar al usuario
  }

  aceptarUsuario() {
    // Lógica para aceptar al usuario
  }
  constructor(private route: ActivatedRoute, private postulanteService: PostulanteService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { // Especifica el tipo de 'params' como 'Params'
      const nombreUsuario = params['nombreUsuario'];
      if (nombreUsuario) {
        // Cargar los datos del usuario desde el servicio
        this.postulanteService.getUsuarioPorNombre(nombreUsuario).subscribe(data => {
          this.usuario = data;
        });
      }
    });
    this.categoriaSeleccionada='informacionPersonal';
  }
}
