import { BaseChartDirective } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/services/api.service'; // Update the path accordingly
import * as Models from '../api/models'; // Single import for all models
import { ScaleDataByTimestampRangeGet$Params } from '..//api/fn/operations/scale-data-by-timestamp-range-get';


@Component({
selector: 'app-scale-chart',
templateUrl: './scale-chart.component.html',
styleUrl: './scale-chart.component.css',
  standalone: true,
  imports: [BaseChartDirective],
})
export class ScaleChartComponent implements OnInit {

constructor(private apiService: ApiService) {}

ngOnInit(): void {
      const from: Models.Instant = new Date('2024-01-01T00:00:00Z').toISOString();
      const to: Models.Instant = new Date('2024-07-01T23:59:59Z').toISOString();

      const params: ScaleDataByTimestampRangeGet$Params = { from, to };


    this.apiService.scaleDataByTimestampRangeGet(params).subscribe(
      (data: Models.ScaleDataDto[]) => {
        const weights = data.map(item => item.weight);
        const timestamps = data.map(item => item.insertDate);


// console.log(weights);
// console.log(timestamps);
        this.lineChartData[0].data = weights;
        this.lineChartLabels = timestamps;
        console.log('Scale data loaded', data);
      },
      error => {
        console.error('Error loading scale data', error);
      }
    );
  }

  global: boolean = false;
  country!: string;
  //data: GlobalData;
  dailyData: any[] = [];
  countries: any[] = [];
  lineChartData: any[] = [
    {
      data: [65, 64, 33, 44],
      label: 'Temp label'
    }
  ];
  public lineChartType: String = "line";
  lineChartLabels: any[] = [
    'label01', 'label02', 'label03'
  ];
  barChartData: any[] = [
    {
      data: [65, 76, 33],
      label: 'Label'
    }
  ];
}



// import { Component, OnInit } from '@angular/core';
// import { ChartDataset, ChartOptions } from 'chart.js';
// import { Color, Label } from 'ng2-charts';
// import { HttpClient } from '@angular/common/http';
//
// @Component({
//   selector: 'app-scale-chart',
//   standalone: true,
//   imports: [],
//   templateUrl: './scale-chart.component.html',
//   styleUrl: './scale-chart.component.css'
// })
// export class ScaleChartComponent implements OnInit {
//

//   public lineChartData: ChartDataset[] = [
//     { data: [], label: 'Weight' },
//   ];
//
//   public lineChartLabels: Label[] = [];
//
//   public lineChartOptions: (ChartOptions & { annotation: any }) = {
//     responsive: true,
//     scales: {
//       xAxes: [{}],
//       yAxes: [
//         {
//           id: 'y-axis-0',
//           position: 'left',
//         }
//       ]
//     },
//     annotation: {
//       annotations: [],
//     },
//   };
//
//   public lineChartColors: Color[] = [
//     {
//       borderColor: 'black',
//       backgroundColor: 'rgba(255,255,0,0.3)',
//     },
//   ];
//
//   public lineChartLegend = true;
//   public lineChartType = 'line';
//   public lineChartPlugins = [];
//
//   constructor(private http: HttpClient) { }
//
//   ngOnInit(): void {
//   console.log("Hello")
//     this.http.get<any[]>('http://localhost:8080/scale_data/by-timestamp-range?from=2021-01-01T00:00:00Z&to=2024-12-31T23:59:59Z')
//       .subscribe(data => {
//         const weights = data.map(item => item.weight);
//         const timestamps = data.map(item => item.timestamp);
//
//         this.lineChartData[0].data = weights;
//         this.lineChartLabels = timestamps.map(timestamp => new Date(timestamp).toLocaleDateString());
//       });
//   }
// }
