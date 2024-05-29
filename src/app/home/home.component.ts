import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
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
