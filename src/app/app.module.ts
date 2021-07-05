import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from ".//app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CabecalhoModule } from "./componentes/cabecalho/cabecalho.module";
import { RodapeModule } from "./componentes/rodape/rodape.module";

@NgModule({
  declarations: [AppComponent, RodapeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
