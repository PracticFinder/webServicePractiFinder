import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private businessUrl = 'http://localhost:3000/empresas';

  constructor(private http: HttpClient) {}
  getBusiness(): Observable<any> {
    return this.http.get<any>(this.businessUrl);
  }

  updateBusiness(id: number, newData: any): Observable<any> {
    const url = `${this.businessUrl}/${id}`;
    return this.http.put<any>(url, newData);
  }

  addBusiness(updatedData: any): Observable<any> {
    return this.http.post(this.businessUrl, updatedData);
  }

  deleteBusiness(id: number): Observable<any> {
    const url = `${this.businessUrl}/${id}`;
    return this.http.delete(url);
  }
}
