import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-pessoas-incluir',
  templateUrl: './pessoas-incluir.component.html',
  styleUrls: ['./pessoas-incluir.component.scss']
})

export class PessoasIncluirComponent implements OnInit {
  formpessoa: FormGroup;
  submitted = false;

  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.formpessoa = this.fb.group({
      nome:'',
      cpf:'',
      data_nascimento:'',
      endereco:'',
      pix:'',
      contato:''
    })  
  }

  ngOnInit(): void {
  }

  onSubmit() {
     this.submitted = true; 
     console.info('teste');
     let form = this.formpessoa.value;
     form.contato=form.contato*1;
     form.cpf=form.cpf*1;
     form.data_nascimento=new Date(form.data_nascimento);

     this.http.post('http://localhost:3000/pessoas', form).subscribe(data => {
      console.info('teste 3333');
      console.info(data);
    })
  }

}
