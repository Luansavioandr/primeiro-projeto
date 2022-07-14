import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { PeriodicElement } from 'src/app/Models/PeriodicElement';
import { PeriodicElementService } from 'src/app/services/periodicElement.service';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PeriodicElementService]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!:MatTable<any>
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource!: PeriodicElement[];
  
  constructor(
    public dialog: MatDialog,
    public periodicElementService: PeriodicElementService
    ) {
      this.periodicElementService.getelement()
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
      }); 
    }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        id: 0,
        position: null,
        name: '',
        weight: null,
        symbol: ''
      } : {
      id: element.id,  
      position: element.position,
      name: element.name,
      weight: element.weight,
      symbol: element.symbol
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        console.log(result);
        if (result.id > 0){
          this.periodicElementService.editElement(result)
          .subscribe((data: PeriodicElement) => {
            this.dataSource[result.id =- 1] = result;
            this.table.renderRows();
          });
        } else {
          this.periodicElementService.createElements(result)
          .subscribe((data: PeriodicElement) => {
            this.dataSource.push(result);
            this.table.renderRows();  
          });
        }
        
      } 
    });
  }
  editElement(element: PeriodicElement): void{
    this.openDialog(element);
  }

  deleteElement(id: number): void {
    this.periodicElementService.deleteElement(id).subscribe(() => {
      this.periodicElementService.getelement()
      .subscribe((data: PeriodicElement[]) => {
        this.dataSource = data;
        this.table.renderRows();
      }); 
    });

  }
}
