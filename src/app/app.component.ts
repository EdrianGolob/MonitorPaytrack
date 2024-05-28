import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { PoMenuItem} from '@po-ui/ng-components';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SharedModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//export class AppComponent implements OnInit {
export class AppComponent {

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

