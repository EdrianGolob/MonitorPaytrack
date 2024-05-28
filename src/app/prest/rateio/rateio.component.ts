import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PrestService } from '../../shared/services/prest.service';

@Component({
  selector: 'app-rateio',
  templateUrl: './rateio.component.html',
  styleUrl: './rateio.component.css'
})

export class RateioComponent implements OnInit {

  /*
  filterData: any = {
    page: 1,
    pageSize: 50,
  };
*/
 colunasRateio: Array<PoTableColumn> = [ 
    { property: 'cc',                  label: 'C.CUSTO',     type: 'string', width: '10%'},
    { property: 'tipo',                label: 'TIPO',        type: 'string', width: '20%'},
    { property: 'codigo_documento',    label: 'CODIGO',      type: 'string', width: '10%'},
    { property: 'percentual_rateio',   label: '% RATEIO',    type: 'string', width: '10%'},
    { property: 'valor_rateios',       label: 'VALOR RATEIO',type: 'currency', format: 'BRL', width: '20%'},
    { property: 'cpf_cnpj',            label: 'CPF/CNPJ',    type: 'string'},
    
  ];

  itensRateio: any;

   //hasMore$!: Observable<boolean>;

  constructor(private service: PrestService) {}

  ngOnInit(): void {
    this.listaRateio()
  }

  voltaPrest() {
  }
 
  listaRateio() {
    const rowid: string = sessionStorage.getItem('rowidPrest') || ''  //atencao
    this.service.getRateio(rowid).subscribe({
      next:result => {
        this.itensRateio = result.items
      },
      error:erro => {
        console.log(erro)
      },
    })
  }

}
