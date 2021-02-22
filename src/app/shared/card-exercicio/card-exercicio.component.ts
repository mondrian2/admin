import { Exercicio } from './../../models/exercicio';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-exercicio',
  templateUrl: './card-exercicio.component.html',
  styleUrls: ['./card-exercicio.component.scss']
})
export class CardExercicioComponent implements OnInit {
  @Input() exercicio: Exercicio;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}
