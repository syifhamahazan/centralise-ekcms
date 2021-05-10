import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetaResultPageRoutingModule } from './meta-result-routing.module';

import { MetaResultPage } from './meta-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetaResultPageRoutingModule
  ],
  declarations: [MetaResultPage]
})
export class MetaResultPageModule {}
