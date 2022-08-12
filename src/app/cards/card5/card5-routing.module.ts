import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card5Page } from './card5.page';

const routes: Routes = [
  {
    path: '',
    component: Card5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card5PageRoutingModule {}
