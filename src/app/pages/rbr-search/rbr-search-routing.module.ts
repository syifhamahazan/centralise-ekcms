import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RbrSearchPage } from './rbr-search.page';

const routes: Routes = [
  {
    path: '',
    component: RbrSearchPage
  },
  {
    path: 'rbr-result',
    loadChildren: () => import('./rbr-result/rbr-result.module').then( m => m.RbrResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RbrSearchPageRoutingModule {}
