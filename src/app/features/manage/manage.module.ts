import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageWeatherComponent } from './manage-weather/manage-weather.component';

const routes: Routes = [
  { path: '', component: ManageWeatherComponent }
];

@NgModule({
  declarations: [ManageWeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ManageModule { }
