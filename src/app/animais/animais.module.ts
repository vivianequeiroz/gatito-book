import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';

@NgModule({
  imports: [
    CommonModule,
    AnimaisRoutingModule
  ],
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent]
})
export class AnimaisModule { }
