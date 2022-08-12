import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card1Page } from './card1.page';

const routes: Routes = [
  {
    path: '',
    component: Card1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card1PageRoutingModule {}
