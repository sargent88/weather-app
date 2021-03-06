import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ManageWeatherComponent } from './manage-weather/manage-weather.component';
import { AddLocationComponent } from './add-location/add-location.component';

const routes: Routes = [
  { path: '', component: ManageComponent, children: [
    { path: '', component: ManageWeatherComponent }
    ] 
  }
];

@NgModule({
  declarations: [
    ManageComponent,
    ManageWeatherComponent,
    AddLocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [
    AddLocationComponent
  ]
})
export class ManageModule { }
