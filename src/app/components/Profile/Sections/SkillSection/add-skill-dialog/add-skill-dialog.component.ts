import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.css']
})
export class AddSkillDialogComponent {
  enteredSkill: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { skillType: string }
  ) {}

  confirmSelection(): void {
    // Envía la habilidad ingresada por el usuario al componente principal
    this.dialogRef.close(this.enteredSkill);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
