import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudo } from 'src/app/Models/Estudo';
import { EstudoService } from 'src/app/services/estudo.Service';
import { FormControl,  FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-editestudo',
  templateUrl: './editestudo.component.html',
  styleUrls: ['./editestudo.component.css'],
  providers: [EstudoService, Estudo]
})
export class EditestudoComponent implements OnInit {
  estudo!: Estudo;
  id!: number;
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    public estudoService: EstudoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.estudoService.getEstudoPorid(this.id).subscribe((result: Estudo) => {
      this.estudo = result;
      this.form = new FormGroup({
        userId: new FormControl(result.userId),
        title: new FormControl(result.title),
        completed: new FormControl(result.completed.toString())
      });
    });
  }
  onSubmit() {
    if (this.form.value['userId'] !== undefined && this.form.value['userId'] !== null) {
      this.estudo.userId = this.form.value['userId'];
    }

    if (this.form.value['title'] !== undefined && this.form.value['title'] !== null) {
      this.estudo.title = this.form.value['title'];
    }
    if (this.form.value['completed'] !== undefined && this.form.value['completed'] !== null) {
      this.estudo.completed = Boolean(this.form.value['completed']);
    }

    this.estudo.id = this.id;

    this.estudoService.editEstudo(this.estudo).subscribe((result:string)=>{
      if(result === "Salvo com Sucesso"){
        this.router.navigate(['/estudo'])
      } else{
        alert(result);
      }
    });
  }

}
