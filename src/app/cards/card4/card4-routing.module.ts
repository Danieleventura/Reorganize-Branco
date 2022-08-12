import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card4Page } from './card4.page';

const routes: Routes = [
  {
    path: '',
    component: Card4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card4PageRoutingModule {}
