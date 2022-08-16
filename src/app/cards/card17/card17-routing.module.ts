import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card17Page } from './card17.page';

const routes: Routes = [
  {
    path: '',
    component: Card17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card17PageRoutingModule {}
