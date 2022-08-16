import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card16PageRoutingModule } from './card16-routing.module';

import { Card16Page } from './card16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card16PageRoutingModule
  ],
  declarations: [Card16Page]
})
export class Card16PageModule {}
