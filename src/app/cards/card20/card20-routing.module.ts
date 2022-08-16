import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card20Page } from './card20.page';

const routes: Routes = [
  {
    path: '',
    component: Card20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card20PageRoutingModule {}
