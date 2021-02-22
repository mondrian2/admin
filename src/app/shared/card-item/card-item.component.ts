import { Item } from './../../models/exercicio';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: Item;

  _item: string;
  opcoes: string[];

  constructor() { 
    this._item = '';
    this.opcoes = [];
  }

  ngOnInit(): void {
    this._item = this.item.label;
    this.opcoes= this.item.options;
  }

}
