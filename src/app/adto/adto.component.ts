import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { Observable} from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { adtoService } from '../shared/services/adto.service';
import { HttpClient } from '@angular/common/http';
import { itensAPI } from './models/adto';


@Component({
  selector: 'app-adto',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './adto.component.html',
  styleUrl: './adto.component.css'
})

export class AdtoComponent implements OnInit {
  

  @ViewChild(PoModalComponent, { static: true}) poModal:any = PoModalComponent;

  filterData: any = {
    dataEmissaoIni: new Date(),
    dataEmissaoDim: new Date(),
    codigoDocumentoIni: '',
    codigoDocumentoFim: 'ZZZZZZZZZZZZ',
    cpfCnpjIni: '',
    cpfCnpjFim: 'ZZZZZZZZZZZZ',
    page: 1,
    pageSize: 10,
    tipoDocumento: 'Adiantamento',
  };


  colunas: Array<PoTableColumn> = 
  [ {property: 'codigo_documento',    label: 'CODIGO',      type: 'string', width: '10%'},
    {property: 'tipo',                label: 'TIPO',        type: 'string', width: '10%'},
    {property: 'cpf_cnpj',            label: 'CPF/CNPJ',    type: 'string'},
    {property: 'data_emissao',        label: 'EMISSÃO',     type: 'date'  , width: '12%'},
    {property: 'data_vencimento',     label: 'VENCIMENTO',  type: 'date'  , width: '12%'},
    {property: 'valor_documento',     label: 'VALOR',       type: 'string'},
    {property: 'observação',          label: 'OBSERVAÇÃO',  type: 'string'},
    {property: 'cod_forma_pagto',     label: 'FORMA PAGTO', type: 'string'},
    {property: 'conta_contabil',      label: 'CTA.CONTABIL',type: 'string'},
    {property: 'natureza',            label: 'NATUREZA',    type: 'string'},
    {property: 'centro_custo',        label: 'C.CUSTO',     type: 'string'},
    {property: 'banco_transf',        label: 'BANCO',       type: 'string'},
    {property: 'agencia_transf',      label: 'AGENCIA',     type: 'string'},
    {property: 'cta_corrente_transf', label: 'C.CORRENTE',  type: 'string'},
  ];

 
  close: PoModalAction = {
    label: 'Cancela', action: () => {this.closeModal(); }
  };
  
  confirm: PoModalAction = {
     label: 'Confirma', action: this.updateData.bind(this),
  };
  
  itens: any = []  //tableData

  
  items$!: Observable<boolean>;
  

  constructor(private service: adtoService, 
              private router: Router,
              private http: HttpClient) {}
 

  ngOnInit(): void {
    if(this.itens.length <= 0) {
      this.updateData();
      this.listarTodos();
    }
  }

  closeModal() {
    this.poModal.close();
  }
  
  listarTodos() {
    this.http.get(this.itens).subscribe(() => this.itens);
    //console.log(this.itens)
  }

  updateData() {
    localStorage.setItem("filter", JSON.stringify(this.filterData));
    localStorage.setItem("dados" , JSON.stringify(this.service.retornaItens));

    let obs$ = this.service.getAll(this.filterData);
    
    this.itens = this.service.retornaItens();

    this.items$ = obs$.pipe(pluck('items'));
    
    this.items$.subscribe((result) => {
      if (this.filterData.page == 1) {
        this.itens = [];
      }
    });
    
    /*
    if (this.itens) {
       this.itens.forEach ((el: any) => {this.itens.get(el) });
    }
    */ 

    this.closeModal();
  }

 }


