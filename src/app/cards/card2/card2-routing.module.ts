import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card2Page } from './card2.page';

const routes: Routes = [
  {
    path: '',
    component: Card2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card2PageRoutingModule {}
