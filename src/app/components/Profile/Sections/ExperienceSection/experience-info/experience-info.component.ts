import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ExperienceDialogComponent} from "../experience-dialog/experience-dialog.component";

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.css']
})
export class ExperienceInfoComponent {

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
        this.usuario.experiencias.push( result);
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
