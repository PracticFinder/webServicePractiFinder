// postulante.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Postulante } from '../models/postulante.model';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {
  private baseUrl = 'http://localhost:3001'; // Reemplaza con la URL de tu API o la ruta a tu archivo JSON

  constructor(private http: HttpClient) {}

  getPostulantes(): Observable<Postulante[]> {
    // Obtiene la lista de postulantes desde tu API o archivo JSON
    return this.http.get<Postulante[]>(`${this.baseUrl}/usuarios`);
  }
  getUsuarioPorNombre(nombre: string): Observable<Postulante | undefined> {
    // Obtiene un usuario por nombre desde tu API o archivo JSON
    return this.http.get<Postulante[]>(`${this.baseUrl}/usuarios?nombre=${nombre}`)
      .pipe(map((usuarios: Postulante[]) => usuarios[0])); // Devuelve el primer usuario encontrado
  }
}
