import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoa-form-list',
  templateUrl: './pessoa-form-list.component.html',
  styleUrls: ['./pessoa-form-list.component.scss']
})
export class PessoaFormListComponent implements OnInit {

  @Input() label:string;
  @Output() pessoa = new EventEmitter();
  
  pessoas:any;
  nome:any;
  filtro:any;
  selected:boolean=false;

  constructor(private http: HttpClient) {
    this.label='';
  }

  ngOnInit(): void {
    
  }

  buscaPessoa(nome:string): void{
    this.http.get<any>('http://localhost:3000/pessoas?nome='+nome).subscribe(data => {
      this.pessoas=data.pessoas;
    })
  }

  seleciona(pessoa:any): void{
    this.nome=pessoa.nome;
    this.selected=true;
    this.filtro='';
    this.pessoa.emit(pessoa);
    this.resetLista();
  }

  reset(): void{
    this.selected=false;
    this.pessoa.emit({});
  }
  resetLista(): void{
    setTimeout(() => {
      this.pessoas=[];      
    }, 500);
  }

}
