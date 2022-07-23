import { Component, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Carro } from 'src/app/Models/Carro';
import { CarroService } from 'src/app/services/carro.service';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [CarroService]
})
export class CreateComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>
  carro!: Carro
  constructor(
    public carroService: CarroService,
    public carrocreate: Carro

  ) {}

  ngOnInit(): void {
  }
  salvar() : void{
    this.carroService.createCarro(this.carro).subscribe((result:string)=>{
      if(result === "Salvo com Sucesso"){
        this.table.renderRows();
        //redirecionar para pesquisa carro
      } else{
        alert(result);
      }
    });
  }
}
