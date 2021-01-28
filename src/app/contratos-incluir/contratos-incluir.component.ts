import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contratos-incluir',
  templateUrl: './contratos-incluir.component.html',
  styleUrls: ['./contratos-incluir.component.scss']
})
export class ContratosIncluirComponent implements OnInit {

  form: FormGroup;
  inquilino:any;
  imovel:any;

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      data_inicio:'',
      data_final:'',
      valor_aluguel:'',
      valor_caucao:'',
      data_pagamento:'',
    }) 
  }

  ngOnInit(): void {
  }


  selecionaInquilino(inquilino:any) : void{
    this.inquilino=inquilino;
  }

  selecionaImovel(imovel:any) : void{
    console.info(imovel);
    this.imovel=imovel;
  }

  onSubmit(): void {
    let form = this.form.value;
    form.valor_caucao=form.valor_caucao*1;
    form.valor_aluguel=form.valor_aluguel*1;
    form.data_pagamento=form.data_pagamento*1;
    form.data_inicio=new Date(form.data_inicio);
    form.data_final=new Date(form.data_final);
    form.inquilino=this.inquilino._id;
    form.imovel=this.imovel._id;

    this.http.post('http://localhost:3000/imoveis', {}).subscribe(data => {
      this.router.navigate(['/imoveis']);
    })
  }

}
