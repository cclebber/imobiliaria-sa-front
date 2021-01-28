import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imoveis-form-list',
  templateUrl: './imoveis-form-list.component.html',
  styleUrls: ['./imoveis-form-list.component.scss']
})
export class ImoveisFormListComponent implements OnInit {

  @Input() label:string;
  @Output() imovel = new EventEmitter();
  
  imoveis:any;
  referencia:any;
  filtro:any;
  selected:boolean=false;

  constructor(private http: HttpClient) {
    this.label='';
  }

  ngOnInit(): void {
    
  }

  buscaImoveis(endereco:string): void{
    this.http.get<any>('http://localhost:3000/imoveis?endereco='+endereco).subscribe(data => {
      this.imoveis=data.imoveis;
    })
  }

  seleciona(imovel:any): void{
    this.referencia=imovel.referencia;
    this.selected=true;
    this.filtro='';
    this.imovel.emit(imovel);
    this.resetLista();
  }

  reset(): void{
    this.selected=false;
    this.imovel.emit({});
  }
  resetLista(): void{
    setTimeout(() => {
      this.imoveis=[];      
    }, 500);
  }

}
