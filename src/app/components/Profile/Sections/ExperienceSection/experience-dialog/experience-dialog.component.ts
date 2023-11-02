import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {format} from "date-fns";
import {es} from "date-fns/locale";

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent {

  experienceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.experienceForm = this.fb.group({
      empresa: ['', Validators.required],
      cargo: ['', Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFinalizacion: [null, Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  onAddExperience(): void {
    if (this.experienceForm.valid) {
      const experienceData = this.experienceForm.value;
      experienceData.fechaInicio = this.formatDate(experienceData.fechaInicio);
      experienceData.fechaFinalizacion = this.formatDate(experienceData.fechaFinalizacion);
      this.dialogRef.close(experienceData);
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  formatDate(date: Date): string {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return format(date, " d 'de' MMMM 'del' yyyy", { locale: es });
  }
}
