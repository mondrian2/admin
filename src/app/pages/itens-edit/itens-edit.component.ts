import { Exercicio } from 'src/app/models/exercicio';
import { ItensService } from 'src/app/service/itens.service';
import { Item } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ExercicioService } from 'src/app/service/exercicios.service';

@Component({
  selector: 'app-itens-edit',
  templateUrl: './itens-edit.component.html',
  styleUrls: ['./itens-edit.component.scss']
})

export class ItensEditComponent implements OnInit {
  loading$: Observable<boolean>;
  exercicios$: Observable<Exercicio[]>;
  form: FormGroup
  opcoes: [];
  preview: string[] = [];
  frase = '';
  name = '';
  selected: Item;

  constructor(private formBuilder: FormBuilder, private exercicioService: ExercicioService, private itensService: ItensService, private activedRoute: ActivatedRoute, private route: Router) {
    this.exercicios$ = exercicioService.entities$;
    this.loading$ = exercicioService.loading$;
  }

  update(): void {
    console.log(this.form.value)
    this.itensService.update(this.form.value)
      .subscribe(
        r => {console.log(r); this.route.navigate(['itens']);},
        e => console.log(e),
        () => console.log('complete')
      );
  }

  onCheckboxChange(e: any): void {
    const options: FormArray = this.form.get('options') as FormArray;
    if (e.target.checked) {
      options.push(new FormControl(e.target.value));
    } else {
      const index = options.controls.findIndex(x => x.value === e.target.value);
      options.removeAt(index);
    }
  }

  optionsChanged($event: any): void {
    console.log($event.target.value.split(' '))
    this.opcoes = $event.target.value.split(' ');
  }

  setPreview(): void {
    this.preview = [];
    console.log(this.opcoes)
    this.opcoes.forEach(op => {
      if (this.form.value.options.indexOf(op) >= 0) {
        this.preview.push(`[${op}]`);
      } else {
        this.preview.push(op);
      }
    });
    this.frase = this.preview.join(' ');
  }

  ngOnInit(): void {
    this.exercicioService.getAll()
    this.itensService.getByKey(this.activedRoute.snapshot.paramMap.get('id'))
      .subscribe(item => {
        this.selected = item
        console.log(this.selected)
        this.form = this.formBuilder.group({
          id: new FormControl(item.id),
          label: new FormControl(item.label),
          exercicio_id: new FormControl(item.exercicio_id),
          options: this.formBuilder.array([], [Validators.required])
        });

      })
  }
}
