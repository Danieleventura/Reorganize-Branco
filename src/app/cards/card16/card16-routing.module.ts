import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Card16Page } from './card16.page';

const routes: Routes = [
  {
    path: '',
    component: Card16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Card16PageRoutingModule {}
