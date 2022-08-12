import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card5PageRoutingModule } from './card5-routing.module';

import { Card5Page } from './card5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card5PageRoutingModule
  ],
  declarations: [Card5Page]
})
export class Card5PageModule {}
