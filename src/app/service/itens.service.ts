import { Item } from './../models/exercicio';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ItensService extends EntityCollectionServiceBase<Item> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Item', serviceElementsFactory);
  }
}