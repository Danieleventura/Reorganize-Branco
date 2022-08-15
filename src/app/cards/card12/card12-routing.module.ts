import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card12Page } from './card12.page';

const routes: Routes = [
  {
    path: '',
    component: Card12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card12PageRoutingModule {}
