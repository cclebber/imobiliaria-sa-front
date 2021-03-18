import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.scss']
})
export class PagamentosComponent implements OnInit {

  form: FormGroup;
  contratoId: any= "";
  validate:any={};
  pagamentos:any;

  constructor(private http: HttpClient, public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      data_recebimento:'',
      valor_recebido:'',
      mes_referencia:'',
      ano_referencia:'',
    })
    this.route=route;
  }

  ngOnInit(): void {

    this.contratoId=this.route.snapshot.paramMap.get('id');
    this.onFind();

  }


  onSubmit(): void {
    let form = this.form.value;    
    if(this.contratoId) form.contrato=this.contratoId;

      this.http.post<any>('http://localhost:3000/pagamentos', form).subscribe(data => {
        if(data.ok) {
          this.onFind();
          alert("Registrado com sucesso")
        }
        else this.validate=data.message.errors;
      })
  }

  onFind(): void{
    this.http.get<any>('http://localhost:3000/pagamentos?contrato='+this.contratoId).subscribe(data => {
      this.pagamentos=data.pagamentos;
    })
  }

}
