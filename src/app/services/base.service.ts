import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  baseUrl: string = 'https://practifinder-403908.uc.r.appspot.com/api';

  constructor() {
  }

  async get(endpoint: string) {
    return this.request('GET', endpoint);
  }

  async post(endpoint: string, data: any) {
    return this.request('POST', endpoint, data);
  }

  async delete(endpoint: string) {
    return this.request('DELETE', endpoint);
  }

  private async request(method: string, endpoint: string, data?: any) {
    const url = `${this.baseUrl}/${endpoint}`;
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Puedes agregar más headers si es necesario
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      return await response.json();
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      throw error;
    }
  }
}
