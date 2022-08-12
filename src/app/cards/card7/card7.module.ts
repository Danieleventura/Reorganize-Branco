import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card7PageRoutingModule } from './card7-routing.module';

import { Card7Page } from './card7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card7PageRoutingModule
  ],
  declarations: [Card7Page]
})
export class Card7PageModule {}
