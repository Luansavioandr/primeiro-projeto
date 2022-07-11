import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PerguntaComponent } from './meu-primeiro/pergunta.component';
import { Pergunta2Component } from './meu-primeiro/pergunta2.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    PerguntaComponent,
    Pergunta2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
