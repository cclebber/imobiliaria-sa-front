import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasIncluirComponent } from './pessoas-incluir/pessoas-incluir.component';
import { ImoveisComponent } from './imoveis/imoveis.component';
import { ImoveisIncluirComponent } from './imoveis-incluir/imoveis-incluir.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ContratosIncluirComponent } from './contratos-incluir/contratos-incluir.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoasComponent},
  {path: 'pessoas-incluir', component: PessoasIncluirComponent},
  {path: 'imoveis', component: ImoveisComponent},
  {path: 'imoveis-incluir', component: ImoveisIncluirComponent},
  {path: 'contratos', component: ContratosComponent},
  {path: 'contratos-incluir', component: ContratosIncluirComponent},
  {path: 'contratos-editar/:id', component: ContratosIncluirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
