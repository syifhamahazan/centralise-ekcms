import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvanceSearchPageRoutingModule } from './advance-search-routing.module';

import { AdvanceSearchPage } from './advance-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdvanceSearchPageRoutingModule
  ],
  declarations: [AdvanceSearchPage]
})
export class AdvanceSearchPageModule {}
