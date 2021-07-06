import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AutenticacaoService } from "src/app/autenticacao/autenticacao.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario = "";
  senha = "";

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(["animais"]);
      },
      (error) => {
        alert("Usuario ou senha inválido.");
      }
    );
  }

  imprimirPagina(idBotao: string) {
    const contentToPrint = document.getElementById("impressao")
    const windowFormat = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    windowFormat.document.write(contentToPrint.innerHTML);
    windowFormat.document.close();
    windowFormat.focus();
    windowFormat.print();
    windowFormat.close();
  }
}
