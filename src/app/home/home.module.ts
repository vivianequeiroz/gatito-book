import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent, LoginComponent, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
