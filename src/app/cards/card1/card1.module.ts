import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card1PageRoutingModule } from './card1-routing.module';

import { Card1Page } from './card1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card1PageRoutingModule
  ],
  declarations: [Card1Page]
})
export class Card1PageModule {}
