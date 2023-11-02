import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AddSkillDialogComponent} from "../add-skill-dialog/add-skill-dialog.component";
import {UserService} from "../../../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-skill-info',
  templateUrl: './skill-info.component.html',
  styleUrls: ['./skill-info.component.css']
})
export class SkillInfoComponent {
   @Input()
   usuario: any;
   @Output() actualizarUsuarioEvent = new EventEmitter<any>();
  constructor(public dialog: MatDialog) {
  }
  updateUserInfo(updatedInfo: any) {
    this.actualizarUsuarioEvent.emit(updatedInfo);
  }
  openAddSkillDialog(type: string): void {
    const dialogRef = this.dialog.open(AddSkillDialogComponent, {
      width: '400px',
      data: { skillType: type }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        if (type === 'tecnica') {
          this.usuario.habilidades.tecnicas.push(result); // Agrega la habilidad al array 'tecnicas'
        } else if (type === 'interpersonal') {
          this.usuario.habilidades.interpersonales.push(result); // Agrega la habilidad al array 'interpersonales'
        }

        // Llama a la función para actualizar el usuario con las habilidades actualizadas
        this.updateUserInfo(this.usuario);
      }
    })
  };

  eliminarHabilidad(tipo: string, index: number): void {
    if (tipo === 'tecnica') {
      this.usuario.habilidades.tecnicas.splice(index, 1); // Elimina la habilidad técnica
    } else if (tipo === 'interpersonal') {
      this.usuario.habilidades.interpersonales.splice(index, 1); // Elimina la habilidad interpersonal
    }

    this.updateUserInfo(this.usuario); // Actualiza el usuario después de eliminar la habilidad
  }
}
