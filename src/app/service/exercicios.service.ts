import { Exercicio } from './../models/exercicio';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ExercicioService extends EntityCollectionServiceBase<Exercicio> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Exercicio', serviceElementsFactory);
  }
}