import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card8PageRoutingModule } from './card8-routing.module';

import { Card8Page } from './card8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card8PageRoutingModule
  ],
  declarations: [Card8Page]
})
export class Card8PageModule {}
