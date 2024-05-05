import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-prest',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './prest.component.html',
  styleUrl: './prest.component.css'
})
export class PrestComponent {

}
