import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdtoComponent } from './adto.component';

const routes: Routes = [
  {path:'', component: AdtoComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdtoRoutingModule { }
