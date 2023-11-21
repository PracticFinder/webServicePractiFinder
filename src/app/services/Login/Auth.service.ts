import { Injectable } from '@angular/core';

import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, pipe} from "rxjs";
import {BaseService} from "../base.service";
import {UserData} from "../../Interfaces/Login";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  async getUsers() {
    try {
      const response = await this.http.get('/auth/Usuario/Listar');
      console.log('Lista de usuarios:', response);
      return response;
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
      throw error;
    }
  }


  async deleteUser(userId: number) {
    try {
      const response = await this.http.delete(`users/${userId}`);
      console.log(`Usuario eliminado:`, response);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }


  login (creds: any){
    return this.http.post(`${this.baseUrl}/auth/login`, creds, { observe: 'response' })
        .pipe(
            map((res: any) => {
              const body = res.body;
              const headers = res.headers;

              const bearerToken = headers.get('Authorization');
              if (bearerToken) {
                const token = bearerToken.replace('Bearer ', '');
                localStorage.setItem('token', token);
              }

              return body;
            })
        );
  }

  async register (userData: UserData) {
    try {
      const response = await this.http.post(`${this.baseUrl}/auth/Usuario/Registrar`, userData);
      console.log('Usuario creado:', response);
      return response;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }
}
