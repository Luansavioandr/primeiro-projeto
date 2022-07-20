import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface Carro {
  id: number;
  nome: string;
  cor: string;
  ano: string;
  placa: string;
}

const CARRO_DATA: Carro[] = [
  {id: 0, nome: 'focus', cor: 'preto', ano: '13/13', placa: 'our3h96'},
  {id: 1, nome: 'hb20', cor: 'vermelho', ano: '13/14', placa: 'ouk8862'},

];

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  displayedColumns: string[] = ['id','nome', 'cor', 'ano', 'placa','opçoes'];
  dataSource = CARRO_DATA;
  constructor() { }

  ngOnInit(): void {
  }
}
