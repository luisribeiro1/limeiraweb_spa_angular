import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { DiarioComponent } from './componentes/diario/diario.component';
import { MensalComponent } from './componentes/mensal/mensal.component';
import { AnualComponent } from './componentes/anual/anual.component';
import { HttpClientModule } from '@angular/common/http';
import { HorarioComponent } from './componentes/horario/horario.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    DiarioComponent,
    MensalComponent,
    AnualComponent,
    HorarioComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
