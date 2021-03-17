import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvResultPageRoutingModule } from './adv-result-routing.module';

import { AdvResultPage } from './adv-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvResultPageRoutingModule
  ],
  declarations: [AdvResultPage]
})
export class AdvResultPageModule {}
