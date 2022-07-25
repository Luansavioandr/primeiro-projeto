import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Estudo } from 'src/app/Models/Estudo';
import { EstudoService } from 'src/app/services/estudo.Service';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css'],
  providers: [EstudoService]
})
export class EstudoComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>
  displayedColumns: string[] = ['userId','id', 'title', 'completed', 'opçoes'];
  dataSource!: Estudo[];

  constructor(
    public estudoService: EstudoService
  ) { }

  ngOnInit(): void {
    this.estudoService.getEstudo()
    .subscribe((data: Estudo[]) => {
      this.dataSource = data;
    }); 
  }
  deleteCarro(id: number): void {
    this.estudoService.deleteEstudo(id).subscribe(() => {
      this.estudoService.getEstudo()
      .subscribe((data: Estudo[]) => {
        this.dataSource = data;
        this.table.renderRows();
      }); 
    });
  }
}
