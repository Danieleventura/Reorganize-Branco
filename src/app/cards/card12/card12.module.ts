import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card12PageRoutingModule } from './card12-routing.module';

import { Card12Page } from './card12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card12PageRoutingModule
  ],
  declarations: [Card12Page]
})
export class Card12PageModule {}
