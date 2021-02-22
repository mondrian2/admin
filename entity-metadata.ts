import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Exercicio: {},
  Item: {}
};

const pluralNames = {
  Exercicio: 'Exercicios',
  Item: 'Itens'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};