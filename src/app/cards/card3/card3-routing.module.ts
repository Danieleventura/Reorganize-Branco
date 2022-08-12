import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card3Page } from './card3.page';

const routes: Routes = [
  {
    path: '',
    component: Card3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card3PageRoutingModule {}
