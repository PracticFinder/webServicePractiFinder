import {Component, Inject, NgModule} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {format} from 'date-fns'; // Importa el paquete de formateo de fechas
import {es} from 'date-fns/locale'; // Importa el paquete de idioma


@Component({
  selector: 'app-edit-certificacion-dialog',
  templateUrl: './edit-certificacion-dialog.component.html',
  styleUrls: ['./edit-certificacion-dialog.component.css']
})
export class EditCertificacionDialogComponent {
  nuevaCertificacionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditCertificacionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.nuevaCertificacionForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      nombreInstitucion: ['', Validators.required],
      fechaObtencion: [new Date(), Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveCertificacion(): void {
    if (this.nuevaCertificacionForm.valid) {
      const nuevaCertificacion = this.nuevaCertificacionForm.value;
      nuevaCertificacion.fechaObtencion = this.formatDate(nuevaCertificacion.fechaObtencion);
      this.dialogRef.close(nuevaCertificacion);
    }
  }

  formatDate(date: Date): string {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return format(date, " d 'de' MMMM 'del' yyyy", { locale: es });
  }
}
