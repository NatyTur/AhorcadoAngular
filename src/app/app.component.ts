import { Component } from '@angular/core';

//decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//plantilla donde se carga el componente
  styleUrls: ['./app.component.css']
})

//clase
export class AppComponent {

palabra:string ="";
title = 'Ahorcado';
etapa = 1;



IngresaPalabra(palabra: string) {
  this.palabra = palabra;
}

CambiaEtapa(etapa: number) {
  this.etapa = etapa;
}
 
}
/*main-->modulo raiz(app.module.ts)-->componente ppal (app.component.ts)
En el componente especificamos el htmll en donde se carga*/