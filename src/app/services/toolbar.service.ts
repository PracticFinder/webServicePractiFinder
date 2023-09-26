import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private mostrarToolbarSubject = new BehaviorSubject<boolean>(true);
  mostrarToolbar$ = this.mostrarToolbarSubject.asObservable();

  toggleMostrarToolbar(value: boolean) {
    this.mostrarToolbarSubject.next(value);
  }
}
