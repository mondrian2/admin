import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Input() type: Number;

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
