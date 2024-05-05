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
  actions: Array <PoPageAction> = [
    {
      label:'Detalhe',
      url:'adto/detalhe',
    },
  ];

  breadcrumb: PoBreadcrumb = {
    items: [{label: 'Home', 
             link: '/adto', 
             label:'Adiantamento'}],
    },
    items: any;

    colunas: Array <PoTableColumn> = [
      {property: ,
       label: ,
       type
      }
    ]
  }
  constructor() {}

  ngOnInit(): void {
    
  }
}
