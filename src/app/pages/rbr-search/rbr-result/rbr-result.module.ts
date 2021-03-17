import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbrResultPageRoutingModule } from './rbr-result-routing.module';

import { RbrResultPage } from './rbr-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbrResultPageRoutingModule
  ],
  declarations: [RbrResultPage]
})
export class RbrResultPageModule {}
