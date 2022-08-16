import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card18Page } from './card18.page';

const routes: Routes = [
  {
    path: '',
    component: Card18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card18PageRoutingModule {}
