import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  menus: Array<PoMenuItem> = 
  [
    {label: 'Adiantamento',        
     //shortLabel: 'Adto', 
     //action: this.menuAction.bind(this),       
     link: './adto', 
     icon: 'po-icon po-icon-star'},

    {label: 'Prestação de Contas', 
     //shortLabel: 'Prest',
     //action: this.menuAction.bind(this),  
     link: './prest', 
     icon: 'po-icon po-icon-money'}
  ]
  
 
  menuItemSelected: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {}
    
 
  menuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
    
  }


}
