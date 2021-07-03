import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, MensagemModule, ReactiveFormsModule],
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
