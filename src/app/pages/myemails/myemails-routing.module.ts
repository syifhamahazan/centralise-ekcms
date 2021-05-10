import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyemailsPage } from './myemails.page';

const routes: Routes = [
  {
    path: '',
    component: MyemailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyemailsPageRoutingModule {}
