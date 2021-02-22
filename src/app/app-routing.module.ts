import { ItensAddComponent } from './pages/itens-add/itens-add.component';
import { ExercicioAddComponent } from './pages/exercicio-add/exercicio-add.component';
import { ItensEditComponent } from './pages/itens-edit/itens-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercicioEditComponent } from './pages/exercicio-edit/exercicio-edit.component';
import { ExercicioListComponent } from './pages/exercicio-list/exercicio-list.component';
import { ItensListComponent } from './pages/itens-list/itens-list.component';

const routes: Routes = [
  { path: 'exercicios', component: ExercicioListComponent },
  { path: 'exercicios/:id', component: ExercicioEditComponent },
  { path: 'exercicio-add', component: ExercicioAddComponent },

  { path: 'itens', component: ItensListComponent },
  { path: 'itens/:id', component: ItensEditComponent },
  { path: 'item-add', component: ItensAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
