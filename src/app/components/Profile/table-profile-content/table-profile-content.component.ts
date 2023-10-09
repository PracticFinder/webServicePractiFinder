import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-profile-content',
  templateUrl: './table-profile-content.component.html',
  styleUrls: ['./table-profile-content.component.css']
})
export class TableProfileContentComponent {
  @Input() usuario: any;
  mostrarInfoPersonal = true;
  mostrarConocimientoYAptitud = false;
  mostrarCursos = false;
  mostrarExperienciaLaboral = false;
  mostrarIdiomas = false;
  longtable=false;

  showInformacionPersonal() {
    this.mostrarInfoPersonal = true;
    this.mostrarConocimientoYAptitud = false;
    this.mostrarCursos = false;
    this.mostrarExperienciaLaboral = false;
    this.mostrarIdiomas = false;
    this.longtable=false;
  }

  showConocimientosYAptitudes() {
    this.mostrarInfoPersonal = false;
    this.mostrarConocimientoYAptitud = true  ;
    this.mostrarCursos = false;
    this.mostrarExperienciaLaboral = false;
    this.mostrarIdiomas = false;
    this.longtable=false;

  }


  showCursos() {
    this.mostrarInfoPersonal = false;
    this.mostrarConocimientoYAptitud = false;
    this.mostrarCursos = true;
    this.mostrarExperienciaLaboral = false;
    this.mostrarIdiomas = false;
    this.longtable=false;

  }

  showExperienciaLaboral() {
    this.mostrarInfoPersonal = false;
    this.mostrarConocimientoYAptitud = false;
    this.mostrarCursos = false;
    this.mostrarExperienciaLaboral = true;
    this.mostrarIdiomas = false;
    this.longtable=true;
  }

  showIdiomas() {
    this.mostrarInfoPersonal = false;
    this.mostrarConocimientoYAptitud = false;
    this.mostrarCursos = false;
    this.mostrarExperienciaLaboral = false;
    this.mostrarIdiomas = true;
    this.longtable=false;

  }
}
