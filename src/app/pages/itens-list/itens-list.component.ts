import { ItensService } from 'src/app/service/itens.service';
import { Item } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrls: ['./itens-list.component.scss']
})
export class ItensListComponent implements OnInit {
  loading$: Observable<boolean>;
  itens$: Observable<Item[]>;

  constructor(private itemService: ItensService, private route: Router) {
    this.itens$ = itemService.entities$;
    this.loading$ = itemService.loading$;
  }

  delete(item: Item): void {
    this.itemService.delete(item.id)
    .subscribe(r => this.route.navigate(['itens']));
  }

  ngOnInit() {
    this.itemService.getAll();
  }
  
}