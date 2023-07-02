import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { ServicioPalabraService } from '../servicio-palabra.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {


  @Input() palabraIn:string;
  @Output() etapaOut = new EventEmitter<number>();
  mascara: string;
  palabra: string;
  vidas: number = 6;
  mensaje: string;
  juegoterminado: boolean = false;
  
  constructor(private Servicio: ServicioPalabraService) { }

  ngOnInit() {

    this.palabra = this.palabraIn
    let temp = [...this.palabra];  
    //let text_1 = prompt("Igresa cualquier palabra");
    
    for (let i=0; i<this.palabra.length; i++) {   
      temp[i] = '-'
    }    
    this.mascara = temp.join("");
    this.juegoterminado = false;
  }

  URL_IMAGENES_PRE = "assets/ahorcado";
  URL_IMAGENES_EXT = ".png";
  vidaImagen = this.URL_IMAGENES_PRE+"6"+this.URL_IMAGENES_EXT; //URL imagen cambiante durante los fallos en el juego
  title = "Juego del Ahorcado";

  probarSuerte(letra:string){

    letra=letra.toLowerCase();  //Pasamos la letra a minúscula (solo por las dudas que el usuario la ingrese en mayúscula)
    if(letra.length == 0 || this.juegoterminado)
    {
      return;
    }
    
    let temp = [...this.mascara];  //Creamos una array temporal que recibe el valor actual de la palabra oculta  
    
    //let character = 'o'
    let contador = temp.length; //creamos una variable que nos sirve para evaluar. Tambien podemos usar un boolean

      for (let i=0; i<temp.length; i++) { //Recorremos la mascara
        if(this.palabra.charAt(i) ==letra) { //Si la palabra elegida en el comboBox resulta que existe en el bucle, se ejecuta la acción
          temp[i] = letra; //sustituimos el valor de la posición del array temporal por la palabra elegida
          contador--;       //Indicamos que hemos encontrado un valor correcto, disminuyendo el contador para que sea distinto al valor original 
          }
      } 
      if(contador == temp.length && this.vidas!=0) { //Si el contador tiene un valor identico al original, significa que no hemos acertado letra, y por tanto perdemos vidas
        this.vidas--;
        this.lifes();
      }
      
      this.mascara = temp.join(""); // modificamos el valor de la mascara con el valor del array temporal, convirtiendolo en string por medio de join()
      //this.letrasEmpleadas(letra);  //Insertamos la letra elegida en el array de letras empleadas

      contador = this.palabra.length //Volvemos a inicializar contador
      for (let i=0; i<temp.length; i++) { //Recorremos la mascara comparando con la palabra
        if(this.palabra.charAt(i) == temp[i]) { //Si la palabra es caracter a caracter igual que la mascara el contador quedará en cero
           contador--;       //caracter indica la cantidad de caracteres diferentes entre palabra y mascara
          }
      }
      console.log(contador);
      if(contador == 0) { //Si la palabra de la mascara coincide con la palabra oculta, significa que hemos ganado. ¡HURRA!       
        this.gameOver(); //En tal caso, ejecutariamos la función de fin de juego
      }    

  }
  
  reiniciarJuego() {
    this.etapaOut.emit(1);
    //window.location.reload();
  }

  lifes() {
      this.vidaImagen = this.URL_IMAGENES_PRE+this.vidas+this.URL_IMAGENES_EXT;    
      if(this.vidas==0){
        this.gameOver();
      }    
  }
  //Metodo que ejecutamos cuando el juego se termina, tanto si hemos perdido o ganado
  gameOver() {
  
   this.juegoterminado = true;
   if(this.vidas==0){ //Evaluamos si hemos perdido por medio del marcador de vidas del jugador
    this.mascara = this.palabra;
    this.mensaje = "Perdiste!!. El juego terminó!!" 
  } else {
    this.mensaje = "¡FeLiCiDaDeS! Ganaste!!" 
  }
 }
}
