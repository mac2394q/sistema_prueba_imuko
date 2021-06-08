import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eps } from '../domain/model/eps';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpsService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getepss() {
    return this.http.get(`${this.API_URI}/eps`);
  }

  geteps(id: string) {
    return this.http.get(`${this.API_URI}/eps/${id}`);
  }



}
