import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card13PageRoutingModule } from './card13-routing.module';

import { Card13Page } from './card13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card13PageRoutingModule
  ],
  declarations: [Card13Page]
})
export class Card13PageModule {}
