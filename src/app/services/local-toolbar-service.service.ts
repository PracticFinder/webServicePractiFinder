import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalToolbarServiceService {
  private barStudentKey = 'barStudent';
  private mostrarToolbarKey = 'mostrarToolbar';

  constructor() {}

  obtenerMostrarToolbar(): boolean {
    const mostrar = localStorage.getItem(this.mostrarToolbarKey);
    return mostrar ? JSON.parse(mostrar) : false;
  }

  guardarMostrarbarStudent(valor: boolean): void {
    localStorage.setItem(this.barStudentKey, JSON.stringify(valor));
  }

  obtenerMostrarbarStudent(): boolean {
    const mostrar = localStorage.getItem(this.barStudentKey); // Corregido aquí
    return mostrar ? JSON.parse(mostrar) : false;
  }

}
