import {Component, Input} from '@angular/core';
import {UserService} from "../../../../services/User/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-table-postulante-content',
  templateUrl: './table-postulante-content.component.html',
  styleUrls: ['./table-postulante-content.component.css']
})
export class TablePostulanteContentComponent {
  @Input() usuario: any;


  showInfo: {
    personal: boolean,
    skills: boolean,
    courses: boolean,
    experience: boolean,
    languages: boolean
  };

  longtable: boolean;

  constructor(private usuarioService: UserService,private router: Router) {
    this.showInfo = {
      personal: true,
      skills: false,
      courses: false,
      experience: false,
      languages: false
    };
    this.longtable = false;
  }

  retroceder(): void{
    this.router.navigate(['/step-one']);
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
