import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisComponent implements OnInit {

  imoveis:any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:3000/imoveis').subscribe(data => {
      this.imoveis=data.imoveis;
    })

  }

}

