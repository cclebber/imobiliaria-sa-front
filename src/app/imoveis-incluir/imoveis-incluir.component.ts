import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-imoveis-incluir',
  templateUrl: './imoveis-incluir.component.html',
  styleUrls: ['./imoveis-incluir.component.scss']
})
export class ImoveisIncluirComponent implements OnInit {

  form: FormGroup;
  proprietario:any;
  imovelId:any;
  notExclude:Boolean = false;
  validate:any={};

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.form = this.fb.group({
      endereco:'',
      cep:'',
      valor_aluguel:'',
      valor_iptu:'',
    })
    this.route=route;
  }

  ngOnInit(): void {
    this.imovelId=this.route.snapshot.paramMap.get('id');
    if(this.imovelId){
      this.http.get<any>('http://localhost:3000/imoveis/'+this.imovelId).subscribe(data => {
        console.info(data);
        this.form.setValue({
          endereco:data.endereco,
          cep:data.cep,
          valor_aluguel:data.valor_aluguel,
          valor_iptu:data.valor_iptu
        })
        this.proprietario=data.proprietario;
        this.notExclude=data.notExclude;
      })
    }    
  }

  selecionaProprietario(proprietario:any) : void{
    this.proprietario=proprietario;
  }

  onSubmit(): void {
    let form = this.form.value;
    if (this.proprietario)form.proprietario=this.proprietario._id;

    if(this.imovelId){
      form.id=this.imovelId;
      this.http.put<any>('http://localhost:3000/imoveis', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/imoveis']);
        else this.validate=data.message.errors;
      })
    }else{      
      this.http.post<any>('http://localhost:3000/imoveis', form).subscribe(data => {
        if(data.ok) this.router.navigate(['/imoveis']);
        else this.validate=data.message.errors;
      })
    }
  }

  excluir(): void {
    if(confirm("Tem certeza que deseja mesmo excluir?")){
      this.http.delete('http://localhost:3000/imoveis/'+this.imovelId).subscribe(data => {
        this.router.navigate(['/imoveis']);
      })
    }
  }

}
