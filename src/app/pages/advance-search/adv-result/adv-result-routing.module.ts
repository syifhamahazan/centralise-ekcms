import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvResultPage } from './adv-result.page';

const routes: Routes = [
  {
    path: '',
    component: AdvResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvResultPageRoutingModule {}
