import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card20PageRoutingModule } from './card20-routing.module';

import { Card20Page } from './card20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card20PageRoutingModule
  ],
  declarations: [Card20Page]
})
export class Card20PageModule {}
