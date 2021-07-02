import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ],
  declarations: [ListaAnimaisComponent]
})
export class AnimaisModule { }
