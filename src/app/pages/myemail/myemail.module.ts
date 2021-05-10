import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyemailPageRoutingModule } from './myemail-routing.module';

import { MyemailPage } from './myemail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    MyemailPageRoutingModule
  ],
  declarations: [MyemailPage]
})
export class MyemailPageModule {}
