import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../Models/Carro';

@Injectable()
export class PeriodicElementService {
    carroApiUrl = '';
  constructor(private http: HttpClient) { }

  getelement(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carroApiUrl);
  }

  createElements(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.carroApiUrl, carro);
  }
  
  editElement(carro: Carro): Observable<Carro> {
    return this.http.put<Carro>(this.carroApiUrl, carro);
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.carroApiUrl}?id=${id}`);
  }
}