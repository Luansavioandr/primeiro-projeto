import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Carro {
  id: number;
  nome: string;
  cor: string;
  ano: string;
  placa: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  carro!: Carro;

  getErrorMessage() {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
