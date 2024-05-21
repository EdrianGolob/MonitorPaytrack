import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { Observable} from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PrestService } from '../shared/services/prest.service';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { RateioComponent } from './rateio/rateio.component';

@Component({
  selector: 'app-adto',
  standalone: true,
  imports: [SharedModule, FormsModule, PoPageDynamicTableModule],
  templateUrl: './prest.component.html',
  styleUrl: './prest.component.css'
})

export class PrestComponent implements OnInit {
   @ViewChild(PoModalComponent, { static: true}) poModal:any = PoModalComponent;

   filterData: any = {
    dataEmissaoIni: new Date(),
    dataEmissaoDim: new Date(),
    codigoDocumentoIni: '',
    codigoDocumentoFim: 'ZZZZZZZZZZZZ',
    cpfCnpjIni: '',
    cpfCnpjFim: 'ZZZZZZZZZZZZ',
    page: 1,
    pageSize: 30,
    tipoDocumento: 'PrestacaoContas',
  };

  colunas: Array<PoTableColumn> = [ 
    { property: 'codigo_documento',    label: 'CODIGO',      type: 'string', width: '10%'},
    { property: 'tipo',                label: 'TIPO',        type: 'string', width: '10%'},
    { property: 'cpf_cnpj',            label: 'CPF/CNPJ',    type: 'string'},
    { property: 'data_emissao',        label: 'EMISSÃO',     type: 'date'  , width: '12%'},
    { property: 'data_vencimento',     label: 'VENCIMENTO',  type: 'date'  , width: '12%'},
    { property: 'valor_documento',     label: 'VALOR',       type: 'string'},
    { property: 'observação',          label: 'OBSERVAÇÃO',  type: 'string'},
    { property: 'conta_contabil',      label: 'CTA.CONTABIL',type: 'string'},
    { property: 'natureza',            label: 'NATUREZA',    type: 'string'},
    { property: 'centro_custo',        label: 'C.CUSTO',     type: 'string'},
    { property: 'rateio_centro_custo', label: 'RATEIO',      type: 'string'},
    { property: 'rateio_cc',           label: 'RATEIO CC',   type: 'string'},
  ];

  acoes: PoTableAction[] =  [
    {label: 'Rateios', action: this.rateio.bind(this)}
    //{label: 'Rateio', url: ''} action: () => this.router.navigate(['cuf0069'])
    //{label: 'Rateios', action: () => this.router.navigate(['rateio'])}
  ];
  
  close: PoModalAction = {
    label: 'Cancela', action: () => {this.closeModal()}
  };
  
  confirm: PoModalAction = {
     label: 'Confirma', action: () => {this.onListaDados()}
  };
  
  
  itens: any = []  //tableData
  obs$!: Observable<boolean>;
  hasMore$!: Observable<boolean>;
  
  temRateio: any;

  constructor(private service: PrestService, 
              private router: Router,
              private http: HttpClient) {}
 
  ngOnInit(): void {
    this.retornaDadosPrest();
  }

  closeModal() {
    this.poModal.close();
  }

  onShowMore() {
    this.filterData.page++;
    this.retornaDadosPrest();
  }

  onListaDados() {
    this.filterData.page = 1;
    this.retornaDadosPrest();
  }

  retornaDadosPrest() {
    let obs$ = this.service.getAll(this.filterData);
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

    this.hasMore$ = obs$.pipe(pluck('hasNext'));
       
  }

  rateio(args: any) {
    
    this.temRateio = args['rateio_cc']
    if (this.temRateio === true) {
       this.router.navigate(['./prest/rateio']);
    }

  }
}
