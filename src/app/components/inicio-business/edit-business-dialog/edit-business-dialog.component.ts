import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BusinessService} from "../../../services/business.service";
import {format} from "date-fns";
import {es} from "date-fns/locale";

@Component({
  selector: 'app-edit-business-dialog',
  templateUrl: './edit-business-dialog.component.html',
  styleUrls: ['./edit-business-dialog.component.css']
})
export class EditBusinessDialogComponent {
  newForm: FormGroup;
  titulo: any;
  description: any;
  fechainicio: any;
  fechafin:any ;
  requisitos: any;
  funciones:any;
  beneficios:any;
  area:any;
  ubicacion:any;
  salario:any;

  constructor(
    public dialogRef: MatDialogRef<EditBusinessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private businessService: BusinessService
  ) {
    this.newForm = this.formBuilder.group({
      id: [11],
      Titulo: [data.valoor.Titulo , Validators.required],
      Descripcion: [data.valoor.Descripcion, Validators.required],
      Fecha_inicio: [data.valoor.Fecha_inicio, Validators.required],
      Fecha_fin: [data.valoor.Fecha_fin, Validators.required],
      Requisitos: [data.valoor.Requisitos, Validators.required],
      Funciones: [data.valoor.Funciones, Validators.required],
      Beneficios: [data.valoor.Beneficios, Validators.required],
      More: [false],
      Area: [data.valoor.Area, Validators.required],
      Ubicacion: [data.valoor.Ubicacion, Validators.required],
      Salario: [data.valoor.Salario, Validators.required],
      postulantes: [data.valoor.postulantes],
    });

    this.titulo = data.valoor.Titulo;
    this.description = data.valoor.Descripcion;
    this.fechainicio= data.valoor.Fecha_inicio;
    this.fechafin= data.valoor.Fecha_fin;
    this.requisitos= data.valoor.Requisitos;
    this.funciones= data.valoor.Funciones;
    this.beneficios= data.valoor.Beneficios;
    this.area= data.valoor.Area;
    this.ubicacion= data.valoor.Ubicacion;
    this.salario= data.valoor.Salario;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {

    const nuevaCertificacion = this.newForm.value;
    nuevaCertificacion.Fecha_inicio = this.formatDate(nuevaCertificacion.Fecha_inicio);
    nuevaCertificacion.Fecha_fin = this.formatDate(nuevaCertificacion.Fecha_fin);
    nuevaCertificacion.id = this.data.valoor.id;


    this.data.business.postulaciones[this.data.position] = nuevaCertificacion //actualizar la postulacion

    this.businessService.updateBusiness(this.data.business.id, this.data.business)
      .subscribe(response => {
        console.log('Empresa actualizada exitosamente', response);
        this.dialogRef.close(response); // Puedes cerrar el cuadro de diálogo si la operación es exitosa
      }, error => {
        console.error('Error al actualizar la empresa', error);
        // Aquí puedes manejar el error de manera apropiada
      });
    this.dialogRef.close(nuevaCertificacion);
  }

  formatDate(date: Date): string {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return format(date, " d 'de' MMMM 'del' yyyy", { locale: es });
  }

  protected readonly toString = toString;
}
