import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ],
  declarations: [ListaAnimaisComponent, AnimalComponent]
})
export class AnimaisModule { }
