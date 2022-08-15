import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card11PageRoutingModule } from './card11-routing.module';

import { Card11Page } from './card11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card11PageRoutingModule
  ],
  declarations: [Card11Page]
})
export class Card11PageModule {}
