import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  public pessoas=[];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:3000/pessoas').subscribe(data => {
      console.info('teste 3333');
      console.info(data);

    })

  }

  ngOnInit(): void {
  }

}
