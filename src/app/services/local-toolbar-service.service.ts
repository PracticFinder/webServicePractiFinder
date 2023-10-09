import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalToolbarServiceService {
  private mostrarToolbarKey = 'mostrarToolbar';

  constructor() {}

  guardarMostrarToolbar(mostrar: boolean) {
    localStorage.setItem(this.mostrarToolbarKey, JSON.stringify(mostrar));
  }

  obtenerMostrarToolbar(): boolean {
    const mostrar = localStorage.getItem(this.mostrarToolbarKey);
    return mostrar ? JSON.parse(mostrar) : false;
  }
}
