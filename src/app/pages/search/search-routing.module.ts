import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: 'opac-result/:citedworkId',
    loadChildren: () => import('./opac-result/opac-result.module').then( m => m.OpacResultPageModule)
  },  {
    path: 'meta-result',
    loadChildren: () => import('./meta-result/meta-result.module').then( m => m.MetaResultPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
