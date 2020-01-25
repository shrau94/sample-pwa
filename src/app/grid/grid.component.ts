import { Component, OnInit } from '@angular/core';
import { athletesData } from './data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  localData = athletesData;
  blue = 'blue';
  constructor() { }

  ngOnInit() {
  }

}
