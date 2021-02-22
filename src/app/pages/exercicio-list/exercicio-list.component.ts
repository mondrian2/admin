import { ExercicioService } from '../../service/exercicios.service';
import { Exercicio } from '../../models/exercicio';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio-list',
  templateUrl: './exercicio-list.component.html',
  styleUrls: ['./exercicio-list.component.scss']
})
export class ExercicioListComponent implements OnInit {
  loading$: Observable<boolean>;
  exercicios$: Observable<Exercicio[]>;

  constructor(private exercicioService: ExercicioService, private route: Router) {
    this.exercicios$ = exercicioService.entities$;
    this.loading$ = exercicioService.loading$;
  }

  delete(exercicio: Exercicio): void {
    this.exercicioService.delete(exercicio.id)
    .subscribe(r => this.route.navigate(['exercicios']));
  }

  ngOnInit() {
    this.exercicioService.getAll();
  }
  
}