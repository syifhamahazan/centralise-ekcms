import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbrResultPage } from './rbr-result.page';

const routes: Routes = [
  {
    path: '',
    component: RbrResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbrResultPageRoutingModule {}
