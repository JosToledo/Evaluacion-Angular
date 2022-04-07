import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {
  @ViewChild('nombre') nameKey!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  iniciarCuestionario(){
    localStorage.setItem("nombre",this.nameKey.nativeElement.value);
  }

}
