import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-incluir',
  templateUrl: './pessoas-incluir.component.html',
  styleUrls: ['./pessoas-incluir.component.scss']
})

export class PessoasIncluirComponent implements OnInit {
  formpessoa: FormGroup;
  pessoaId: any= "";
  submitted = false;
  notExclude:Boolean = false;
  validate:any={};

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router,private route: ActivatedRoute) {
    this.formpessoa = this.fb.group({
      nome:'',
      cpf:'',
      data_nascimento:'',
      endereco:'',
      pix:'',
      contato:''
    })  
    this.route=route;
  }

  ngOnInit(): void {

    this.pessoaId=this.route.snapshot.paramMap.get('id');
    if(this.pessoaId){
      this.http.get<any>('http://localhost:3000/pessoas/'+this.pessoaId).subscribe(data => {
        console.info(data);
        this.formpessoa.setValue({
          nome:data.nome,
          cpf:data.cpf,
          data_nascimento:data.data_nascimento.split('T')[0],
          endereco:data.endereco,
          pix:data.pix,
          contato:data.contato
        })
        this.notExclude=data.notExclude;
      })
    }
}
onSubmit(): void {
    let form = this.formpessoa.value;
    form.contato=form.contato*1;
    form.data_nascimento=new Date(form.data_nascimento);

    if(this.pessoaId){
      //altera
      form.id=this.pessoaId;
      this.http.put<any>('http://localhost:3000/pessoas', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/pessoas']);
        else this.validate=data.message.errors;
      })
    }else{
      //novo
      this.http.post<any>('http://localhost:3000/pessoas', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/pessoas']);
        else this.validate=data.message.errors;        
      })
    }
  }

excluir(): void {
  if(confirm("Tem certeza que deseja mesmo excluir?")){      
    this.http.delete('http://localhost:3000/pessoas/'+this.pessoaId).subscribe(data => {
      this.router.navigate(['/pessoas']);
    })
  }
}
}
