import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela4PageRoutingModule } from './tela4-routing.module';

import { Tela4Page } from './tela4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela4PageRoutingModule
  ],
  declarations: [Tela4Page]
})
export class Tela4PageModule {}
