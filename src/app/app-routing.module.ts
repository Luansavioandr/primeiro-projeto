import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarroComponent } from './views/carro/carro.component';
import { CreateComponent } from './views/carro/create/create.component';
import { EditComponent } from './views/carro/edit/edit.component';
import { EstudoComponent } from './views/estudo/estudo.component';
import { EditestudoComponent } from './views/estudo/editestudo/editestudo.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'carro', component: CarroComponent
  },
  {
    path: 'carro/create', component: CreateComponent
  },
  {
    path: 'carro/edit/:id', component: EditComponent
  },
  {
    path: 'estudo', component: EstudoComponent
  },
  {
    path: 'estudo/editestudo/:id', component: EditestudoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
