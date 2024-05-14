import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adto',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adto.component.html',
  styleUrl: './adto.component.css'
})
export class AdtoComponent implements OnInit {
  //@ViewChild('optionsForm', { static: true }) form: NgForm;
  //@ViewChild(PoModalComponent, { static: true}) poModal: PoModalComponent

  colunas: Array<PoTableColumn> = 
  [
    {property: 'codigo_documento',    label: 'CODIGO',      type: 'string'},
    {property: 'tipo',                label: 'TIPO',        type: 'string'},
    {property: 'cpf_cnpj',            label: 'CPF/CNPJ',    type: 'string'},
    {property: 'data_emissao',        label: 'EMISSÃO',     type: 'date'  },
    {property: 'data_vencimento',     label: 'VENCIMENTO',  type: 'date'  },
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

 
  itens: any  
  
  //constructor(private poNotification: PoNotificationService) {}
  constructor() {}

  ngOnInit(): void {
  }

    
  
 }
