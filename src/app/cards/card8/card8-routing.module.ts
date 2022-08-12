import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card8Page } from './card8.page';

const routes: Routes = [
  {
    path: '',
    component: Card8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card8PageRoutingModule {}
