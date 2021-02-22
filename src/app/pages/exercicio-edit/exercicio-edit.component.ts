import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercicio } from 'src/app/models/exercicio';
import { ExercicioService } from 'src/app/service/exercicios.service';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-exercicio-edit',
  templateUrl: './exercicio-edit.component.html',
  styleUrls: ['./exercicio-edit.component.scss']
})
export class ExercicioEditComponent implements OnInit {

  loading$: Observable<boolean>;
  exercicios$: Observable<Exercicio[]>;
  form: FormGroup

  constructor(private exercicioService: ExercicioService, private activedRoute: ActivatedRoute, private route: Router) {}

  update(): void {
    this.exercicioService.update(this.form.value)
    .subscribe(
      () => this.route.navigate(['exercicios']),
      e => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.exercicioService.getByKey(this.activedRoute.snapshot.paramMap.get('id'))
    .subscribe(exercicio => {
      this.form = new FormGroup({
        id: new FormControl(exercicio.id),
        comando: new FormControl(exercicio.comando)
      })    
    })
  }

}
