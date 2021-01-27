import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  pessoas:any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:3000/pessoas').subscribe(data => {
      this.pessoas=data.pessoas;
    })


  }

}
