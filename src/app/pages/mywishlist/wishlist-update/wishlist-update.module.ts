import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlistUpdatePageRoutingModule } from './wishlist-update-routing.module';

import { WishlistUpdatePage } from './wishlist-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlistUpdatePageRoutingModule
  ],
  declarations: [WishlistUpdatePage]
})
export class WishlistUpdatePageModule {}
