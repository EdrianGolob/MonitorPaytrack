import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestRoutingModule } from './prest-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PrestService } from '../shared/services/prest.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrestRoutingModule,
    SharedModule,
    FormsModule,
  ],
  providers: [PrestService]
})
export class PrestModule { }
