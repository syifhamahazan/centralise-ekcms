import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistUpdatePage } from './wishlist-update.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistUpdatePageRoutingModule {}
