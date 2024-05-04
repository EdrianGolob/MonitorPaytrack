import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoMenuModule, PoModule, PoPageModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [CommonModule, PoModule, PoMenuModule, PoPageModule, HttpClientModule],
  exports: [PoModule, PoMenuModule, PoPageModule, HttpClientModule]
})
export class SharedModule { }
