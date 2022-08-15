import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela4Page } from './tela4.page';

const routes: Routes = [
  {
    path: '',
    component: Tela4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela4PageRoutingModule {}
