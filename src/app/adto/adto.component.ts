import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PoModalAction, PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { adtoService } from '../shared/services/adto.service';
import { Router } from '@angular/router';
import { Observable, pluck } from 'rxjs';


@Component({
  selector: 'app-adto',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adto.component.html',
  styleUrl: './adto.component.css'
})

export class AdtoComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true}) poModal:any = PoModalComponent;

  filterData: any = {
    emissaoIni: new Date(),
    emissaoFim: new Date(),
    documentoIni: '',
    documentoFim: 'ZZZZZZZZZZ',
    cpfCnpjIni: '',
    cpfCnpjFim: 'ZZZZZZZZZZ',
    page: 1,
    pageSize: 10,
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
    label: 'Confirma', action: this.atualizaDados.bind(this),
  };
  

  itens: any   //tableData
 
  items$!: Observable<boolean>;
  hasMore$!: Observable<boolean>;
  success$!: Observable<boolean>;
  

  constructor(private service: adtoService) {}

  ngOnInit(): void {

    /*
    if(localStorage.getItem("filter")) {
      this.filterData = JSON.parse(localStorage.getItem("filter"));
    }

    if(localStorage.getItem("itens")) {
      this.itens = JSON.parse(localStorage.getItem("itens"));
    }
   */ 

    if(this.itens.length <= 0) {
      this.updateData();
    }
  }

  
  closeModal() {
    this.poModal.close();
  }
  
  atualizaDados() {
    this.filterData.page = 1;
    this.updateData();
  }

  private updateData() {
    

    localStorage.setItem("filter", JSON.stringify(this.filterData));

    

    this.items$.subscribe((result) => {
      if (this.filterData.page == 1) {
        this.itens = [];
      }
      
      /*
      if (result) {
        result.forEach ((el: any) => {
          this.itens.push(el);
        });
      }
      */
    });

    //this.hasMore$ = obs$.pipe(pluck('hasNext'));
  }

 }
