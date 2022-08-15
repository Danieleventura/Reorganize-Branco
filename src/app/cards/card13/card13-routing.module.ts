import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card13Page } from './card13.page';

const routes: Routes = [
  {
    path: '',
    component: Card13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card13PageRoutingModule {}
