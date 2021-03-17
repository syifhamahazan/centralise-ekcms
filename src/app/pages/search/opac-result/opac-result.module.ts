import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpacResultPageRoutingModule } from './opac-result-routing.module';

import { OpacResultPage } from './opac-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpacResultPageRoutingModule
  ],
  declarations: [OpacResultPage]
})
export class OpacResultPageModule {}
