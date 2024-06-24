import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scale-chart',
  templateUrl: './scale-chart.component.html',
  styleUrls: ['./scale-chart.component.css']
})
export class ScaleChartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Weight' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  console.log("Hello")
    this.http.get<any[]>('http://localhost:8080/scale_data/by-timestamp-range?from=2021-01-01T00:00:00Z&to=2024-12-31T23:59:59Z')
      .subscribe(data => {
        const weights = data.map(item => item.weight);
        const timestamps = data.map(item => item.timestamp);

        this.lineChartData[0].data = weights;
        this.lineChartLabels = timestamps.map(timestamp => new Date(timestamp).toLocaleDateString());
      });
  }
}