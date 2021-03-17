import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenancePageRoutingModule } from './maintenance-routing.module';

import { MaintenancePage } from './maintenance.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function mFactory(){
  return player;
}

@NgModule({
  imports: [
    LottieModule.forRoot({player: mFactory}),
    CommonModule,
    FormsModule,
    IonicModule,
    MaintenancePageRoutingModule
  ],
  declarations: [MaintenancePage]
})
export class MaintenancePageModule {}
