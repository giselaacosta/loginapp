import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private url= environment.urlPaises;

  constructor(private http:HttpClient) { }

  public obtenerPaises(){
    return this.http.get(this.url);
  }
 
}
