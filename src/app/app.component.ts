import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements OnInit {
   menus: Array<PoMenuItem> = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menus = this.getMenu()
  
}

getMenu(): Array<PoMenuItem> {
  return [
    {label: 'Adiantamento', link: '/adto'},
    {label: 'Prestação de Contas', link: '/prest'}
  ]


}

  private onAdto() {
    alert('Clicked in menu item');
  }

  private onPrest() {
    alert('Clicked in menu item');
  }
}
