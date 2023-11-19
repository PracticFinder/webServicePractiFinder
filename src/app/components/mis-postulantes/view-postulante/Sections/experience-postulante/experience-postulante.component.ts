import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  ExperienceDialogComponent
} from "../../../../Profile/Sections/ExperienceSection/experience-dialog/experience-dialog.component";

@Component({
  selector: 'app-experience-postulante',
  templateUrl: './experience-postulante.component.html',
  styleUrls: ['./experience-postulante.component.css']
})
export class ExperiencePostulanteComponent {
  @Input()
  usuario: any;

  constructor(private dialog: MatDialog) {}

  openAddExperienceDialog(): void {
    const dialogRef = this.dialog.open(ExperienceDialogComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.usuario.experiencias.push(result);
      }
    });
  }

  borrarExperiencia(experiencia: any) {
    const index = this.usuario.experiencias.indexOf(experiencia);
    if (index !== -1) {
      this.usuario.experiencias.splice(index, 1);
    }
  }
}
