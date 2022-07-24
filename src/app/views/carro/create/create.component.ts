import { Component, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Carro } from 'src/app/Models/Carro';
import { CarroService } from 'src/app/services/carro.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CarroService, Carro]
})

export class CreateComponent implements OnInit {
  carro!: Carro
  formulario = new FormGroup({
    nome: new FormControl(''),
    cor: new FormControl(''),
    ano: new FormControl(''),
    placa: new FormControl(''),
  });

  constructor(
    public carroService: CarroService,
    private router: Router
  ) {
    this.carro = new Carro();
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if (this.formulario.value['nome'] !== undefined && this.formulario.value['nome'] !== null) {
      this.carro.nome = this.formulario.value['nome'];
    }

    if (this.formulario.value['cor'] !== undefined && this.formulario.value['cor'] !== null) {
      this.carro.cor = this.formulario.value['cor'];
    }

    if (this.formulario.value['ano'] !== undefined && this.formulario.value['ano'] !== null) {
      this.carro.ano = this.formulario.value['ano'];
    }

    if (this.formulario.value['placa'] !== undefined && this.formulario.value['placa'] !== null) {
      this.carro.placa = this.formulario.value['placa'];
    }

    this.carroService.createCarro(this.carro).subscribe((result:string)=>{
      if(result === "Salvo com Sucesso"){
        this.router.navigate(['/carro'])
      } else{
        alert(result);
      }
    });
  }
}
