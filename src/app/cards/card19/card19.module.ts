import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card19PageRoutingModule } from './card19-routing.module';

import { Card19Page } from './card19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card19PageRoutingModule
  ],
  declarations: [Card19Page]
})
export class Card19PageModule {}
