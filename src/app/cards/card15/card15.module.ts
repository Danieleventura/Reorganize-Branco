import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card15PageRoutingModule } from './card15-routing.module';

import { Card15Page } from './card15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card15PageRoutingModule
  ],
  declarations: [Card15Page]
})
export class Card15PageModule {}
