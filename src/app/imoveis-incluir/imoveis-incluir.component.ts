import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imoveis-incluir',
  templateUrl: './imoveis-incluir.component.html',
  styleUrls: ['./imoveis-incluir.component.scss']
})
export class ImoveisIncluirComponent implements OnInit {

  constructor(private http: HttpClient) { 

    
  }

  ngOnInit(): void {
    
  }

  envia() {

    this.http.get('http:localhost:3000/pessoas').subscribe(data => {
      console.info('teste 3333');
      console.info(data);
    })
  }

}
