import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ScaleChartComponent } from './scale-chart/scale-chart.component';
import { ApiModule } from './api/api.module';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ScaleChartComponent
  ],
  imports: [HttpClientModule, ApiModule],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
