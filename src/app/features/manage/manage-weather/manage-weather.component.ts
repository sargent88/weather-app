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

  deleteRow(id) {
    console.log(id)
  }

  addLocation(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '300px',
    height: 'auto'
  });
  dialogRef.afterClosed().subscribe((res) => console.log(res))
  }

  toggle(id) {
    console.log(id)
  }

}
