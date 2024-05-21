import { Component, OnInit} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PoTableColumn } from '@po-ui/ng-components';
import { PrestService } from '../../shared/services/prest.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-rateio',
  templateUrl: './rateio.component.html',
  styleUrl: './rateio.component.css'
})

export class RateioComponent implements OnInit {

  colunasRateio: Array<PoTableColumn> = [ 
    { property: 'cc',                  label: 'C.CUSTO',     type: 'string'},
    { property: 'tipo',                label: 'TIPO',        type: 'string', width: '10%'},
    { property: 'codigo_documento',    label: 'CODIGO',      type: 'string', width: '10%'},
    { property: 'percentual_rateio',   label: '% RATEIO',    type: 'string'},
    { property: 'valor_rateios',       label: 'VALOR RATEIO',type: 'string'},
    { property: 'cpf_cnpj',            label: 'CPF/CNPJ',    type: 'string'},
    
  ];

  actionVoltar: any = {action: this.voltaPrest.bind(this)}

  itensRateio: any

  constructor(private service: PrestService, 
              private router: Router,
              private http: HttpClient) {}


ngOnInit() {
 

}

voltaPrest() {
  alert('volta')
  //this.router.navigate(['./prest']);


  
}

/*
private listaRateio() {

  this.service.getAll(this.filterData).subscribe({
    next:result => {
      this.itens = result.items
    },
    error:erro => {
      console.log(erro)
    },
    complete:() => {
      this.closeModal();
    }
  })
}
*/

}
