import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-pessoas-incluir',
  templateUrl: './pessoas-incluir.component.html',
  styleUrls: ['./pessoas-incluir.component.scss']
})

export class PessoasIncluirComponent implements OnInit {
  
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
     this.submitted = true; 
     console.info('teste');
    
    }

}
