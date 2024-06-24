import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ScaleChartComponent } from './scale-chart/scale-chart.component';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ScaleChartComponent
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
