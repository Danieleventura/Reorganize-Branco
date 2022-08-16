import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card19Page } from './card19.page';

const routes: Routes = [
  {
    path: '',
    component: Card19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card19PageRoutingModule {}
