import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card4PageRoutingModule } from './card4-routing.module';

import { Card4Page } from './card4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card4PageRoutingModule
  ],
  declarations: [Card4Page]
})
export class Card4PageModule {}
