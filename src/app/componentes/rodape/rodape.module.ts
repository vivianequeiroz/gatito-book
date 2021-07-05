import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RodapeComponent } from "./rodape.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  exports: [RodapeComponent],
})
export class RodapeModule {}
