import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetaResultPage } from './meta-result.page';

const routes: Routes = [
  {
    path: '',
    component: MetaResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetaResultPageRoutingModule {}
