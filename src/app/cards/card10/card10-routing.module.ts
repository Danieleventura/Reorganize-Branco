import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card10Page } from './card10.page';

const routes: Routes = [
  {
    path: '',
    component: Card10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card10PageRoutingModule {}
