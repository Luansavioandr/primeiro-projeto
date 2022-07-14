import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../Models/PeriodicElement';

@Injectable()
export class PeriodicElementService {
    elementeApiUrl = 'https://localhost:44366/api/PeriodicElements';
  constructor(private http: HttpClient) { }

  getelement(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementeApiUrl);
  }

  createElements(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.elementeApiUrl, element);
  }
  
  editElement(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.put<PeriodicElement>(this.elementeApiUrl, element);
  }

  deleteElement(id: number): Observable<any> {
    return this.http.delete<any>(`${this.elementeApiUrl}?id=${id}`);
  }
}