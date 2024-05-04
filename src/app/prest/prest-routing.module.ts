import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestComponent } from './prest.component';

const routes: Routes = [
  { path: '', component: PrestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestRoutingModule { }
