import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CabecalhoComponent } from "./cabecalho.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CabecalhoComponent],
  exports: [CabecalhoModule],
})
export class CabecalhoModule {}
