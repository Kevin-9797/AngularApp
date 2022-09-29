import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit  {

  @Input('title') title:string = 'Sin titulo';

  @Input('data') data:any[] = [
    { data: [ 350, 450, 100 ] },
    { data: [ 50, 150, 120 ] },
    { data: [ 250, 130, 70 ] }
  ];
  constructor(){
  }
  
  ngOnInit(): void {
    
    console.log(this.data)
  }
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: this.data
  };

  public doughnutChartType: ChartType = 'doughnut';
}
