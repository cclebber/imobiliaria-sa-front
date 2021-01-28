import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-imoveis-incluir',
  templateUrl: './imoveis-incluir.component.html',
  styleUrls: ['./imoveis-incluir.component.scss']
})
export class ImoveisIncluirComponent implements OnInit {

  form: FormGroup;
  proprietario:any;

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router) { 
    this.form = this.fb.group({
      endereco:'',
      cep:'',
      valor_aluguel:'',
      valor_iptu:'',
    })    
  }

  ngOnInit(): void {
    
  }

  selecionaProprietario(proprietario:any) : void{
    this.proprietario=proprietario;
  }

  onSubmit(): void {
    let form = this.form.value;
    form.cpf=form.cep*1;
    form.valor_aluguel=form.valor_aluguel*1;
    form.valor_iptu=form.valor_iptu*1;
    form.proprietario=this.proprietario._id;

    this.http.post('http://localhost:3000/imoveis', form).subscribe(data => {
      this.router.navigate(['/imoveis']);
    })
  }

}
