import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercicio } from 'src/app/models/exercicio';
import { ExercicioService } from 'src/app/service/exercicios.service';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio-add',
  templateUrl: './exercicio-add.component.html',
  styleUrls: ['./exercicio-add.component.scss']
})
export class ExercicioAddComponent implements OnInit {

  form: FormGroup;
  
  constructor(private exercicioService: ExercicioService, private route: Router) {}

  createForm(exercicio: Exercicio){
    console.log(exercicio)
    this.form = new FormGroup({
      comando: new FormControl(exercicio.comando)
    })    
  }

  add(): void {
    this.exercicioService.add(this.form.value)
    .subscribe(
      () => this.route.navigate(['exercicios']),
      e => console.log(e),
      () => console.log('complete')
    );
  }

  ngOnInit(): void {
    this.createForm(new Exercicio());
  }

}
