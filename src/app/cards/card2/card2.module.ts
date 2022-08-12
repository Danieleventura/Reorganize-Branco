import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card2PageRoutingModule } from './card2-routing.module';

import { Card2Page } from './card2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card2PageRoutingModule
  ],
  declarations: [Card2Page]
})
export class Card2PageModule {}
