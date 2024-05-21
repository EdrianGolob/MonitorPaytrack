import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestComponent } from './prest.component';
import { RateioComponent } from './rateio/rateio.component';

const routes: Routes = [
  { path: '', component: PrestComponent }, //sem nada índica a barra/local
  { path: 'rateio', component: RateioComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestRoutingModule {}
