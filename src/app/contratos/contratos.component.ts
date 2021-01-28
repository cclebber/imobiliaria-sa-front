import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contratoss',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  contratos:any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:3000/contratos').subscribe(data => {
      this.contratos=data.contratos;
    })
  }
}

