import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PoBreadcrumb, PoPageAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-adto',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './adto.component.html',
  styleUrl: './adto.component.css'
})
export class AdtoComponent implements OnInit {
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
    {property: 'banco_transf',        label: 'C.CUSTO',     type: 'string'},
    {property: 'agencia_transf',      label: 'C.CUSTO',     type: 'string'},
    {property: 'cta_corrente_transf', label: 'C.CUSTO',     type: 'string'},
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
 }
