import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WeatherService } from '../../../core/services/weather.service';
import { WeatherType } from './../../../core/types/weather-type';
import { AddLocationComponent } from '../add-location/add-location.component';

@Component({
  selector: 'app-manage-weather',
  templateUrl: './manage-weather.component.html',
  styleUrls: ['./manage-weather.component.scss']
})
export class ManageWeatherComponent implements OnInit {
  weatherData: WeatherType[] = [];
  displayedColumns: string[] = ['city', 'state', 'zip_code', 'forecast', 'delete'];
  loadingResults: boolean = false;

  constructor(
    private weatherService: WeatherService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.loadingResults = true;
    this.weatherService.weather
    .subscribe(
      (res) => {
        this.weatherData = res;
        this.loadingResults = false;
      }
    )
  }

  addLocation(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '300px',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe()
  }

  deleteRow(id) {
    let deleteId = this.weatherData.indexOf(id);
    this.weatherData.splice(deleteId, 1);
    this.weatherService.deleteLocation();
  }
  
  toggle(id) {
    let forecastToggle = this.weatherData.indexOf(id);
    let val = this.weatherData[forecastToggle].forecast
    if (val) {
      val = false;
    } else if(!val) {
      val = true;
    }
  }

}
