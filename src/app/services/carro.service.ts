import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../Models/Carro';

@Injectable()
export class CarroService {
    carroApiUrl = 'https://localhost:7217/api/CarroApi';
  constructor(private http: HttpClient) { }

  getCarro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carroApiUrl);
  }

  getCarroPorid(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.carroApiUrl}/${id}`);
  }

  createCarro(carro: Carro): Observable<string> {
    return this.http.post<string>(this.carroApiUrl, carro);
  }
  
  editCarro(carro: Carro): Observable<string> {
    return this.http.put<string>(this.carroApiUrl, carro);
  }

  deleteCarro(id: number): Observable<any> {
    return this.http.delete<any>(`${this.carroApiUrl}/${id}`);
  }
}