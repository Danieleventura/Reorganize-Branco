import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card14Page } from './card14.page';

const routes: Routes = [
  {
    path: '',
    component: Card14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card14PageRoutingModule {}
