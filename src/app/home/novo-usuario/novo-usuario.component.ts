import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NovoUsuarioService } from "./novo-usuario.service";

@Component({
  selector: "app-novo-usuario",
  templateUrl: "./novo-usuario.component.html",
  styleUrls: ["./novo-usuario.component.css"],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: [""],
      fullName: [""],
      userName: [""],
      password:[""],
    });
  }
}
