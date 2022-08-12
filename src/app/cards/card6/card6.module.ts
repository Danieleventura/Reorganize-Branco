import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card6PageRoutingModule } from './card6-routing.module';

import { Card6Page } from './card6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card6PageRoutingModule
  ],
  declarations: [Card6Page]
})
export class Card6PageModule {}
