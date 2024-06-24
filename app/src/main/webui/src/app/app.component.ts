import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScaleChartComponent } from './scale-chart/scale-chart.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScaleChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'downscaled-frontend';
}
