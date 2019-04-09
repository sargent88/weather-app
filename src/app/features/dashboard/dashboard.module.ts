import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: '', component: WeatherDashboardComponent }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    WeatherDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DashboardModule { }
