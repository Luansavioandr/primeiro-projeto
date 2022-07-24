import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/Models/Carro';
import { CarroService } from 'src/app/services/carro.service';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [CarroService, Carro]
})

export class EditComponent implements OnInit {
  carro!: Carro;
  id!: number;
  formulario!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    public carroService: CarroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.carroService.getCarroPorid(this.id).subscribe((result: Carro) => {
      this.carro = result;
      this.formulario = new FormGroup({
        nome: new FormControl(result.nome),
        cor: new FormControl(result.cor),
        ano: new FormControl(result.ano),
        placa: new FormControl(result.placa),
      });
    });
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

    this.carro.id = this.id;

    this.carroService.editCarro(this.carro).subscribe((result:string)=>{
      if(result === "Salvo com Sucesso"){
        this.router.navigate(['/carro'])
      } else{
        alert(result);
      }
    });
  }
}
