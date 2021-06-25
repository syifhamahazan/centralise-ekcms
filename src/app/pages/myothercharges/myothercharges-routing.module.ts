import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyotherchargesPage } from './myothercharges.page';

const routes: Routes = [
  {
    path: '',
    component: MyotherchargesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyotherchargesPageRoutingModule {}
