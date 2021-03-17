import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasIncluirComponent } from './pessoas-incluir/pessoas-incluir.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImoveisIncluirComponent } from './imoveis-incluir/imoveis-incluir.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosIncluirComponent } from './contratos-incluir/contratos-incluir.component';
import { PessoaFormListComponent } from './pessoa-form-list/pessoa-form-list.component';
import { ImoveisFormListComponent } from './imoveis-form-list/imoveis-form-list.component';

import {LOCALE_ID} from '@angular/core';

import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    PessoasIncluirComponent,
    ImoveisComponent,
    ImoveisIncluirComponent,
    ContratosComponent,
    ContratosIncluirComponent,
    PessoaFormListComponent,
    ImoveisFormListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
