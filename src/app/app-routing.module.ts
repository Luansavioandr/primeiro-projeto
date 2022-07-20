import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CarroComponent } from './views/carro/carro.component';
import { CreateComponent } from './views/carro/create/create.component';
import { EditComponent } from './views/carro/edit/edit.component';

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
    path: 'carro/edit', component: EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
