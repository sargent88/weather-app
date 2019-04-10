import { WeatherService } from '../../../core/services/weather.service';
import { WeatherType } from './../../../core/types/weather-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-weather',
  templateUrl: './manage-weather.component.html',
  styleUrls: ['./manage-weather.component.scss']
})
export class ManageWeatherComponent implements OnInit {
  weatherData: WeatherType[] = [];
  displayedColumns: string[] = ['city', 'state', 'zip_code', 'forecast', 'delete'];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    const weatherObservable = this.weatherService.getWeather();
    weatherObservable.subscribe((weather: WeatherType[]) => {
      this.weatherData = weather;
    })
  }

  deleteRow(id) {
    console.log(id)
  }

  addLocation() {
    console.log('add')
  }

  toggle(id) {
    console.log(id)
  }

}
