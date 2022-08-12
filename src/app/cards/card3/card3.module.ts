import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card3PageRoutingModule } from './card3-routing.module';

import { Card3Page } from './card3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card3PageRoutingModule
  ],
  declarations: [Card3Page]
})
export class Card3PageModule {}
