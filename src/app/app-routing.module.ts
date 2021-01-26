import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasIncluirComponent } from './pessoas-incluir/pessoas-incluir.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoasComponent},
  {path: 'pessoas-incluir', component: PessoasIncluirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
