import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card6Page } from './card6.page';

const routes: Routes = [
  {
    path: '',
    component: Card6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card6PageRoutingModule {}
