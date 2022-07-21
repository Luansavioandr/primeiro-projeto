import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Carro } from 'src/app/Models/Carro';


@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>
  displayedColumns: string[] = ['id','nome', 'cor', 'ano', 'placa','opçoes'];
  dataSource!: Carro[];

  constructor() {

   }

  ngOnInit(): void {
  }
  
}
