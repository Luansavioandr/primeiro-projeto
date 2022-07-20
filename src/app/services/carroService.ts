import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeriodicElementService {
    elementeApiUrl = '';
    constructor(private http: HttpClient) { }
    
}