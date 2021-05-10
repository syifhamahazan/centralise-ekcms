import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyemailsPageRoutingModule } from './myemails-routing.module';

import { MyemailsPage } from './myemails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyemailsPageRoutingModule
  ],
  declarations: [MyemailsPage]
})
export class MyemailsPageModule {}
