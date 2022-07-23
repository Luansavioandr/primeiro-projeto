import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Carro } from 'src/app/Models/Carro';
import { CarroService } from 'src/app/services/carro.service';



@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
  providers: [CarroService]
})
export class CarroComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>
  displayedColumns: string[] = ['id','nome', 'cor', 'ano', 'placa','opçoes'];
  dataSource!: Carro[];

  constructor(
    public carroService: CarroService
  ) {
    this.carroService.getCarro()
    .subscribe((data: Carro[]) => {
      this.dataSource = data;
    }); 
  }

  ngOnInit(): void {
  }
 
}