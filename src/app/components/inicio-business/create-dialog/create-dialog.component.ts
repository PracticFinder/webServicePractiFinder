import {booleanAttribute, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import {BusinessService} from "../../../services/business.service";

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent {
  newForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private businessService: BusinessService
  ) {
    this.newForm = this.formBuilder.group({
      id: [11],
      Titulo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Fecha_inicio: [new Date(), Validators.required],
      Fecha_fin: [new Date(), Validators.required],
      Requisitos: ['', Validators.required],
      Funciones: ['', Validators.required],
      Beneficios: ['', Validators.required],
      More: [false],
      UrlImage: ['', Validators.required],
      Empresa: ['', Validators.required],
      Area: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Salario: [1000.0, Validators.required],
      Postulantes: [[]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {

      const nuevaCertificacion = this.newForm.value;
      nuevaCertificacion.Fecha_inicio = this.formatDate(nuevaCertificacion.Fecha_inicio);
      nuevaCertificacion.Fecha_fin = this.formatDate(nuevaCertificacion.Fecha_fin);
      nuevaCertificacion.id = this.data.valor + 1;

    this.businessService.addBusiness(nuevaCertificacion)
      .subscribe(response => {
        console.log('Nueva empresa guardada exitosamente', response);
        this.dialogRef.close(response); // Puedes cerrar el cuadro de diálogo si la operación es exitosa
      }, error => {
        console.error('Error al guardar la nueva empresa', error);
        // Aquí puedes manejar el error de manera apropiada
      });
    this.dialogRef.close(nuevaCertificacion);
  }

  formatDate(date: Date): string {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return format(date, " d 'de' MMMM 'del' yyyy", { locale: es });
  }
}
