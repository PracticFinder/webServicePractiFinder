import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarioUrl = 'http://localhost:3001/usuario';
  private usuarioSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public usuario$: Observable<any> = this.usuarioSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<any> {
    return this.http.get<any>(this.usuarioUrl);
  }

  updateUsuario(updatedInfo: any): Observable<any> {
    return this.http.put<any>(this.usuarioUrl, updatedInfo);
  }
}
