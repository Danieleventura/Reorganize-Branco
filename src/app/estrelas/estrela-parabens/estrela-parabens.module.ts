import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrelaParabensPageRoutingModule } from './estrela-parabens-routing.module';

import { EstrelaParabensPage } from './estrela-parabens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrelaParabensPageRoutingModule
  ],
  declarations: [EstrelaParabensPage]
})
export class EstrelaParabensPageModule {}
