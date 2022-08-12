import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card9Page } from './card9.page';

const routes: Routes = [
  {
    path: '',
    component: Card9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card9PageRoutingModule {}
