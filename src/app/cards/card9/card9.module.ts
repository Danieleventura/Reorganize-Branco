import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card9PageRoutingModule } from './card9-routing.module';

import { Card9Page } from './card9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card9PageRoutingModule
  ],
  declarations: [Card9Page]
})
export class Card9PageModule {}
