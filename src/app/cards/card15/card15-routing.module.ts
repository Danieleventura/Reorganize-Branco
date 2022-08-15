import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card15Page } from './card15.page';

const routes: Routes = [
  {
    path: '',
    component: Card15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card15PageRoutingModule {}
