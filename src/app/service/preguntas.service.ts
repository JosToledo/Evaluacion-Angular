import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor(private http: HttpClient) { }
  getPreguntaJson(){
    return this.http.get<any>("assets/preguntas.json");
  }
}
