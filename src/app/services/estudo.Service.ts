import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudo } from '../Models/Estudo';

@Injectable()
export class EstudoService {
    estudoApiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) { }

  getEstudo(): Observable<Estudo[]> {
    return this.http.get<Estudo[]>(this.estudoApiUrl);
  }

  getEstudoPorid(id: number): Observable<Estudo> {
    return this.http.get<Estudo>(`${this.estudoApiUrl}/${id}`);
  }

  createEstudo(estudo: Estudo): Observable<string> {
    return this.http.post<string>(this.estudoApiUrl, estudo);
  }
  
  editEstudo(estudo: Estudo): Observable<string> {
    return this.http.put<string>(this.estudoApiUrl, estudo);
  }

  deleteEstudo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.estudoApiUrl}/${id}`);
  }
}