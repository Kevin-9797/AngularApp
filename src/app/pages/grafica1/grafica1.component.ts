import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  constructor() { }
  data:any[] = [
    { data: [ 2, 457, 66 ] },
    { data: [ 46, 167, 168 ] },
    { data: [ 234, 23, 70 ] }
  ]

  ngOnInit(): void {

    

  }



}
