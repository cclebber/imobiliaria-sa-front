import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contratos-incluir',
  templateUrl: './contratos-incluir.component.html',
  styleUrls: ['./contratos-incluir.component.scss']
})
export class ContratosIncluirComponent implements OnInit {

  form: FormGroup;
  inquilino:any;
  imovel:any;
  contratoId: any= "";
  validate:any={};

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      data_inicio:'',
      data_final:'',
      valor_aluguel:'',
      valor_caucao:'',
      data_pagamento:'',
    })
    this.route=route;
  }

  ngOnInit(): void {

    this.contratoId=this.route.snapshot.paramMap.get('id');
    if(this.contratoId){
      this.http.get<any>('http://localhost:3000/contratos/'+this.contratoId).subscribe(data => {
        console.info(data);
        this.form.setValue({
          data_inicio:data.data_inicio.split('T')[0],
          data_final:data.data_final.split('T')[0],
          data_pagamento:data.data_pagamento,
          valor_aluguel:data.valor_aluguel,
          valor_caucao:data.valor_caucao
        })
        this.inquilino=data.inquilino;
        this.imovel=data.imovel;
      })
    }
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
    if(this.inquilino) form.inquilino=this.inquilino._id;
    if(this.imovel) form.imovel=this.imovel._id;

    if(this.contratoId){
      //altera
      form.id=this.contratoId;
      this.http.put<any>('http://localhost:3000/contratos', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/contratos']);
        else this.validate=data.message.errors;
      })
    }else{
      //novo
      this.http.post<any>('http://localhost:3000/contratos', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/contratos']);
        else this.validate=data.message.errors;
      })
    }
  }

  excluir(): void {
    if(confirm("Tem certeza que deseja mesmo excluir?")){
      this.http.delete('http://localhost:3000/contratos/'+this.contratoId).subscribe(data => {
        this.router.navigate(['/contratos']);
      })
    }
  }

}

