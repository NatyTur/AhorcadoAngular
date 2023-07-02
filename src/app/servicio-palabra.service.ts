import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPalabraService {

  arreglo : string[] = [];
  constructor(private HttpCLient: HttpClient) { }

  leerPalabras(){

    this.HttpCLient.get('https://ahorcado1-6e1dc-default-rtdb.firebaseio.com/datos.json').subscribe(
      arregloPalabras=>{
        //console.log(arregloPalabras);
        this.arreglo=Object.values(arregloPalabras);
        console.log(this.arreglo);
      });
  }
  
  guardarPalabra(palabra: string){
    
    this.arreglo.push(palabra);
    this.HttpCLient.put('https://ahorcado1-6e1dc-default-rtdb.firebaseio.com/datos.json', this.arreglo).subscribe
    (
      {
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.info('complete')
      }
    );
  }
}
