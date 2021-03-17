import { NgModule } from '@angular/core';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';
import { LoanCardComponent } from './loan-card/loan-card.component';
import { LoanhistCardComponent } from './loanhist-card/loanhist-card.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { OverdueCardComponent } from './overdue-card/overdue-card.component';
import { SearchistCardComponent } from './searchist-card/searchist-card.component';
import { FinesCardComponent } from './fines-card/fines-card.component';
import { SearchresCardComponent } from './searchres-card/searchres-card.component';
import { WishlistUpdateComponent } from './wishlist-update/wishlist-update.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent,
    LoanhistCardComponent, ReservationCardComponent, OverdueCardComponent, SearchresCardComponent,
    ProfileCardComponent, WishlistCardComponent, LoanCardComponent, SearchistCardComponent, FinesCardComponent, 
    WishlistUpdateComponent],
  exports: [SlidesComponent, StartComponent, LogoComponent, LoanhistCardComponent, ReservationCardComponent, OverdueCardComponent,
   ProfileCardComponent, WishlistCardComponent, LoanCardComponent, SearchistCardComponent, FinesCardComponent, SearchresCardComponent,
   WishlistUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
