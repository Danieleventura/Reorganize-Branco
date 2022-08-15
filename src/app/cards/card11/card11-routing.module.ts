import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card11Page } from './card11.page';

const routes: Routes = [
  {
    path: '',
    component: Card11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card11PageRoutingModule {}
