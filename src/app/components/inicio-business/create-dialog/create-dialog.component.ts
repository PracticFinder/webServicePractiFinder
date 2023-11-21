import { Component, Inject} from '@angular/core';
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
      Empresa: ['', Validators.required],
      UrlImage: ['', Validators.required],
      //POSTULACIONES
      postulaciones:[[]],
      //DATOS PARA LA POSTULACION
      Titulo: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Fecha_inicio: [new Date(), Validators.required],
      Fecha_fin: [new Date(), Validators.required],
      Requisitos: ['', Validators.required],
      Funciones: ['', Validators.required],
      Beneficios: ['', Validators.required],
      More: [false],
      Area: ['', Validators.required],
      Ubicacion: ['', Validators.required],
      Salario: [0.0, Validators.required],
      postulantes: [[]]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const nuevaCertificacion = this.newForm.value;
    let noexist:boolean;
    noexist = true;
    let businessID = 0;
    let UpdateBusiness:any;

    for (let business of this.data.valor) {
      if(business.Empresa === nuevaCertificacion.Empresa){
        noexist = false;
        nuevaCertificacion.postulaciones = this.data.valor.postulaciones;
        businessID = business.id;
        UpdateBusiness = business;
      }
    }

    nuevaCertificacion.Fecha_inicio = this.formatDate(nuevaCertificacion.Fecha_inicio);
    nuevaCertificacion.Fecha_fin = this.formatDate(nuevaCertificacion.Fecha_fin);

    let newPostulacion = {
      Titulo: nuevaCertificacion.Titulo,
      Descripcion: nuevaCertificacion.Descripcion,
      Fecha_inicio: nuevaCertificacion.Fecha_inicio,
      Fecha_fin: nuevaCertificacion.Fecha_fin,
      Requisitos: nuevaCertificacion.Requisitos,
      Funciones: nuevaCertificacion.Funciones,
      Beneficios: nuevaCertificacion.Beneficios,
      More: false,
      Area: nuevaCertificacion.Area,
      Ubicacion: nuevaCertificacion.Ubicacion,
      Salario: nuevaCertificacion.Salario,
      postulantes: []
    }
    //remover campos innecesarios
    // nuevaCertificacion.removeControl('Titulo');
    // nuevaCertificacion.removeControl('Descripcion');
    // nuevaCertificacion.removeControl('Fecha_inicio');
    // nuevaCertificacion.removeControl('Fecha_fin');
    // nuevaCertificacion.removeControl('Requisitos');
    // nuevaCertificacion.removeControl('Funciones');
    // nuevaCertificacion.removeControl('Beneficios');
    // nuevaCertificacion.removeControl('More');
    // nuevaCertificacion.removeControl('Area');
    // nuevaCertificacion.removeControl('Ubicacion');
    // nuevaCertificacion.removeControl('Salario');
    // nuevaCertificacion.removeControl('postulantes');

    const atributosARemover = ['Titulo', 'Descripcion', 'Fecha_inicio','Fecha_fin','Requisitos','Funciones','Beneficios','More','Area','Ubicacion','Salario','postulantes'];

    const nuevaCertificacionSinAtributos = { ...nuevaCertificacion };
    atributosARemover.forEach(atributo => delete nuevaCertificacionSinAtributos[atributo]);


    console.log(nuevaCertificacionSinAtributos);

console.log(noexist);

  if(noexist){
    //en caso de que la empresa no exista

    nuevaCertificacionSinAtributos.id = this.data.valor.length + 1;

    nuevaCertificacionSinAtributos.postulaciones.push(newPostulacion);

    this.businessService.addBusiness(nuevaCertificacionSinAtributos)
      .subscribe(response => {
        console.log('Nueva empresa guardada exitosamente', response);
        this.dialogRef.close(response); // Puedes cerrar el cuadro de diálogo si la operación es exitosa
      }, error => {
        console.error('Error al guardar la nueva empresa', error);
        // Aquí puedes manejar el error de manera apropiada
      });
  }
  else{

    UpdateBusiness.postulaciones.push(newPostulacion);

    this.businessService.updateBusiness(businessID, UpdateBusiness)
        .subscribe(response => {
          console.log('Empresa actualizada exitosamente', response);
          this.dialogRef.close(response); // Puedes cerrar el cuadro de diálogo si la operación es exitosa
        }, error => {
          console.error('Error al actualizar la empresa', error);
          // Aquí puedes manejar el error de manera apropiada
        });
  }



    this.dialogRef.close(nuevaCertificacionSinAtributos);
  }

  formatDate(date: Date): string {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return format(date, " d 'de' MMMM 'del' yyyy", { locale: es });
  }


}
