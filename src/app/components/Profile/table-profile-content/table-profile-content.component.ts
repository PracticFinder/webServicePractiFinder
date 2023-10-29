import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-table-profile-content',
  templateUrl: './table-profile-content.component.html',
  styleUrls: ['./table-profile-content.component.css']
})
export class TableProfileContentComponent {
  @Input() usuario: any;
  @Output() ejecutarFuncion = new EventEmitter<string>();

  ejecutarFuncionExterna(parametro: string) {
    this.ejecutarFuncion.emit(parametro);
  }
  showInfo: {
    personal: boolean,
    skills: boolean,
    courses: boolean,
    experience: boolean,
    languages: boolean
  };

  longtable: boolean;

  constructor(private usuarioService: UserService) {
    this.showInfo = {
      personal: true,
      skills: false,
      courses: false,
      experience: false,
      languages: false
    };
    this.longtable = false;
  }
  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((data: any) => {
      this.usuario = data;
    });
  }

  // Función para actualizar el usuario
  actualizarUsuario(updatedInfo: any): void {
    this.usuarioService.updateUsuario(updatedInfo).subscribe((data: any) => {
    });
  }

  showInformation(section: string) {
    this.showInfo = {
      personal: section === 'personal',
      skills: section === 'skills',
      courses: section === 'courses',
      experience: section === 'experience',
      languages: section === 'languages'
    };

    this.longtable = section === 'experience';
  }

  editarHabilidadTecnica(habilidad: string) {
    // Lógica para editar la habilidad técnica
  }

  agregarHabilidadTecnica() {
    // Lógica para agregar una nueva habilidad técnica
    // Podría mostrar un cuadro de diálogo o un formulario para que el usuario ingrese la nueva habilidad técnica
  }
}
