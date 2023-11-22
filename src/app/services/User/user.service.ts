import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {BaseService} from "../base.service";
import {UserData} from "../../Interfaces/Login";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }


  async getUserByUsername(username: string): Promise<number> {
    const endpoint = `${this.baseUrl}/auth/Usuario/ListarByUsername/${username}`;
    try {
      const response: any = await this.http.get(endpoint).toPromise();
      return Number(response.rolId);
    } catch (error) {
      throw error;
    }
  }

  async getUser(username: string) {
    const endpoint = `${this.baseUrl}/auth/students/${username}`;
    try {
      const response: any = await this.http.get(endpoint).toPromise();
      return response;
    } catch (error) {
      throw error;
    }
  }

  updateUser(updatedUserData: any ): Observable<any> {
    console.log('Actualizando usuario:', updatedUserData);
    const token = localStorage.getItem('token'); // Obtener el token del localStorage

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Agregar el token a la cabecera de autorización
    });
    return this.http.put<any>(`${this.baseUrl}/auth/students/${updatedUserData.id}/createWithMissingAttributes`, updatedUserData, {headers}  );
  }

}
