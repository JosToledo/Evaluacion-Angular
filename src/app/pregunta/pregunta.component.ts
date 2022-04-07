import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';
import { PreguntasService } from '../service/preguntas.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  @ViewChild('casa') nameKey!: ElementRef;
  public nombre: string="";
  public listaPreguntas:any=[];
  public preguntaActual: number= 0;
  public puntos:number = 10;
  cronometro=60;
  respuestaCorrecta:number = 0;
  respuestaIncorrecta:number = 0;
  intervalo$:any;
  constructor(private preguntasServicio : PreguntasService) { }

  ngOnInit(): void {
    this.nombre = localStorage.getItem("nombre")!;
    this.getTodasPreguntas();
  }
  getTodasPreguntas(){
    this.preguntasServicio.getPreguntaJson()
    .subscribe(res=>{
      this.listaPreguntas = res.preguntas;
    })
  }
  siguientePregunta(){
    this.preguntaActual++;
  }
  anteriorPregunta(){
    this.preguntaActual--;
  }
  respuesta(actualPno:number,opcion:any){
    if(opcion.correcto){
      this.respuestaCorrecta++;
      this.preguntaActual++;
    }else{
      this.puntos-=2;
      this.preguntaActual++;
      this.respuestaIncorrecta++;

    }
  } 
  iniciarCronometro(){
    this.intervalo$ = interval(1000)
    .subscribe(val=>{
      this.cronometro--;
      if(this.cronometro===0){
        this.preguntaActual++;
        this.cronometro = 60;
        this.puntos-=2;
      }
    });
    setTimeout(()=>{
      this.intervalo$.unsuscribe();
    },600000);
  }
  pararCronometro(){
    this.intervalo$.unsuscribe();
    this.cronometro = 0;
  }
  reiniciarCronometro(){
    this.pararCronometro();
    this.cronometro = 60;
    this.iniciarCronometro();
  }
}
