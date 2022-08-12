import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card7Page } from './card7.page';

const routes: Routes = [
  {
    path: '',
    component: Card7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card7PageRoutingModule {}
