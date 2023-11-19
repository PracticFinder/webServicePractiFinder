import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  LanguageDialogComponent
} from "../../../../Profile/Sections/LanguagesSection/language-dialog/language-dialog.component";

@Component({
  selector: 'app-language-postulante',
  templateUrl: './language-postulante.component.html',
  styleUrls: ['./language-postulante.component.css']
})
export class LanguagePostulanteComponent {
  @Input()
  usuario: any;

  constructor(private dialog: MatDialog) {}

  openLanguageDialog(): void {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.usuario.idiomas.push(result);
      }
    });
  }

  borrarIdioma(language: any) {
    const index = this.usuario.idiomas.indexOf(language);
    if (index !== -1) {
      this.usuario.idiomas.splice(index, 1);
    }
  }
}
