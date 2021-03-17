import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvanceSearchPage } from './advance-search.page';

const routes: Routes = [
  {
    path: '',
    component: AdvanceSearchPage
  },
  {
    path: 'opac-result/:citedworkId',
    loadChildren: () => import('../search/opac-result/opac-result.module').then( m => m.OpacResultPageModule)
  },
  {
    path: 'adv-result',
    loadChildren: () => import('./adv-result/adv-result.module').then( m => m.AdvResultPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceSearchPageRoutingModule {}
