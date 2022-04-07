import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PreguntaComponent } from './pregunta/pregunta.component';

const routes: Routes = [
  {path:'',redirectTo:'bienvenido',pathMatch:"full"},
  {path:"bienvenido",component:BienvenidoComponent},
  {path:"pregunta",component:PreguntaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
