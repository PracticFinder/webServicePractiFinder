import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserService} from "../../../services/user.service";
import { MatDialog } from '@angular/material/dialog';
import {AddSkillDialogComponent} from "../Sections/SkillSection/add-skill-dialog/add-skill-dialog.component";

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

  constructor(private usuarioService: UserService, public dialog: MatDialog) {
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
    this.usuarioService.updateUsuario(updatedInfo).subscribe((data: any) => {
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



}
