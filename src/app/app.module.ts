import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IngresoPalabraComponent } from './ingreso-palabra/ingreso-palabra.component';
import { JuegoComponent } from './juego/juego.component';
import { ServicioPalabraService } from './servicio-palabra.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IngresoPalabraComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ServicioPalabraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
