import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from '../componentes/mensagem/mensagem.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomeComponent, LoginComponent, MensagemComponent, NovoUsuarioComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
