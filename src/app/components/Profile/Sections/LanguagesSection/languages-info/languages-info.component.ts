import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LanguageDialogComponent} from "../language-dialog/language-dialog.component";
import {UserService} from "../../../../../services/User/user.service";

@Component({
  selector: 'app-languages-info',
  templateUrl: './languages-info.component.html',
  styleUrls: ['./languages-info.component.css']
})
export class LanguagesInfoComponent {
  @Input()
  usuario: any;

  constructor(private dialog: MatDialog, private usuarioService: UserService) {}

  openLanguageDialog(): void {
    const dialogRef = this.dialog.open(LanguageDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.usuario.idiomas.push(result);
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
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
