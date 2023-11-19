import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../../../../services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {
  EditCertificacionDialogComponent
} from "../../../../Profile/Sections/CertificationsSection/edit-certificacion-dialog/edit-certificacion-dialog.component";

@Component({
  selector: 'app-certification-postulante',
  templateUrl: './certification-postulante.component.html',
  styleUrls: ['./certification-postulante.component.css']
})
export class CertificationPostulanteComponent {
  @Input()
  usuario: any;
  @Output() actualizarUsuarioEvent = new EventEmitter<any>();
  updateUserInfo(updatedInfo: any) {
    this.actualizarUsuarioEvent.emit(updatedInfo);
  }
  constructor(private usuarioService: UserService, public dialog: MatDialog) {
  }

  agregarCertificacion(): void {
    const dialogRef = this.dialog.open(EditCertificacionDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.usuario.certificaciones.push(result);
        this.updateUserInfo(this.usuario); // Actualiza el usuario después de agregar una certificación
      }
    });
  }
  borrarCertificacion(certificacion: any) {
    // Lógica para eliminar la certificación del array
    const index = this.usuario.certificaciones.indexOf(certificacion);
    if (index !== -1) {
      this.usuario.certificaciones.splice(index, 1);
      // Lógica para guardar los cambios en la base de datos o realizar otras operaciones necesarias
    }
  }

}
