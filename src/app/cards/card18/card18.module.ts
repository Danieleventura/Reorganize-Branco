import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card18PageRoutingModule } from './card18-routing.module';

import { Card18Page } from './card18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card18PageRoutingModule
  ],
  declarations: [Card18Page]
})
export class Card18PageModule {}
