import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MywishlistPage } from './mywishlist.page';

const routes: Routes = [
  {
    path: '',
    component: MywishlistPage
  },
  {
    path: 'wishlist-update/:Id',
    loadChildren: () => import('./wishlist-update/wishlist-update.module').then( m => m.WishlistUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MywishlistPageRoutingModule {}
