import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card17PageRoutingModule } from './card17-routing.module';

import { Card17Page } from './card17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card17PageRoutingModule
  ],
  declarations: [Card17Page]
})
export class Card17PageModule {}
