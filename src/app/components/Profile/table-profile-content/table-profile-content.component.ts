import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../../services/User/user.service";
import { MatDialog } from '@angular/material/dialog';
import {PdfService} from '../../../services/Pdf/pdf.service';

@Component({
  selector: 'app-table-profile-content',
  templateUrl: './table-profile-content.component.html',
  styleUrls: ['./table-profile-content.component.css']
})
export class TableProfileContentComponent {
  @Input() usuario: any;


  showInfo: {
    personal: boolean,
    skills: boolean,
    courses: boolean,
    experience: boolean,
    languages: boolean
  };

  longtable: boolean;

  constructor(private usuarioService: UserService, public dialog: MatDialog, private pdfService: PdfService) {
    this.showInfo = {
      personal: true,
      skills: false,
      courses: false,
      experience: false,
      languages: false
    };
    this.longtable = false;
  }


  actualizarUsuario(updatedInfo: any): void {
    console.log('no soy profile:', updatedInfo);
    localStorage.setItem('usuario', JSON.stringify(updatedInfo));
    this.usuarioService.updateUser(updatedInfo).subscribe((data: any) => {
      this.usuario = data; // Actualiza la información del usuario con la respuesta del servidor
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


  descargarCV() {
    this.pdfService.generatePdf(this.usuario);
  }

}
