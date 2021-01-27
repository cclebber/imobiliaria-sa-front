import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasIncluirComponent } from './pessoas-incluir/pessoas-incluir.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImoveisIncluirComponent } from './imoveis-incluir/imoveis-incluir.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosIncluirComponent } from './contratos-incluir/contratos-incluir.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoasIncluirComponent,
    ImoveisComponent,
    ImoveisIncluirComponent,
    ContratosComponent,
    ContratosIncluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
