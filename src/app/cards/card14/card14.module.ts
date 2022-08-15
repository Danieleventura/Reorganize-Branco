import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card14PageRoutingModule } from './card14-routing.module';

import { Card14Page } from './card14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Card14PageRoutingModule
  ],
  declarations: [Card14Page]
})
export class Card14PageModule {}
