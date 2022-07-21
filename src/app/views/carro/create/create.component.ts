import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Carro } from 'src/app/Models/Carro';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  carro!: Carro;

  constructor() { }

  ngOnInit(): void {
  }

}
