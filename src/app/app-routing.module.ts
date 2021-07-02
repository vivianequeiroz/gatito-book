import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    loadChildren: async () => {
      const modulo = await import("./home/home.module");
      return modulo.HomeModule;
    },
  },
  {
    path: "animais",
    loadChildren: async () => {
      const modulo = await import("./animais/animais.module");
      return modulo.AnimaisModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
