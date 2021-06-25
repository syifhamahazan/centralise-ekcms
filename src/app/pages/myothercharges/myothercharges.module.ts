import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyotherchargesPageRoutingModule } from './myothercharges-routing.module';

import { MyotherchargesPage } from './myothercharges.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    MyotherchargesPageRoutingModule
  ],
  declarations: [MyotherchargesPage]
})
export class MyotherchargesPageModule {}
