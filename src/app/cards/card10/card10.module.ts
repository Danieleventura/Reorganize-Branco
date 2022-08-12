import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card10PageRoutingModule } from './card10-routing.module';

import { Card10Page } from './card10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card10PageRoutingModule
  ],
  declarations: [Card10Page]
})
export class Card10PageModule {}
