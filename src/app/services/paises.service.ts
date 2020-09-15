import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private urlpaises= environment.urlPaises;
  private urlpersonas= environment.urlPersonas;
  constructor(private http:HttpClient) { }

  public obtenerPaises(){
    return this.http.get(this.urlpaises);
  }
  public obtenerPersonas(){
    return this.http.get(this.urlpersonas);
  }
 
}
