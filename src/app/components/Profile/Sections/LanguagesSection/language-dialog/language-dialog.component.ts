import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.css']
})
export class LanguageDialogComponent {
  languageForm: FormGroup;
  languageLevels = [
    { value: 'basico', viewValue: 'Básico' },
    { value: 'intermedio', viewValue: 'Intermedio' },
    { value: 'avanzado', viewValue: 'Avanzado' },
    { value: 'nativo', viewValue: 'Nativo' }
  ];

  constructor(
    public dialogRef: MatDialogRef<LanguageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.languageForm = this.formBuilder.group({
      idioma: ['', Validators.required],
      nivel: ['', Validators.required]
    });
  }

  onAddLanguage(): void {
    this.dialogRef.close(this.languageForm.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
