import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private barstudentSubject = new BehaviorSubject<boolean>(true);
  private mostrarToolbarSubject = new BehaviorSubject<boolean>(true);

  barStudent$ = this.barstudentSubject.asObservable();
  mostrarToolbar$ = this.mostrarToolbarSubject.asObservable();

  toggleMostrarToolbar(value: boolean) {
    this.mostrarToolbarSubject.next(value);
  }
  toggleMonstrarbarStudent(studentValue: boolean){
    this.barstudentSubject.next(studentValue);
  }
}
