import { Component, OnInit } from '@angular/core';
import { WeatherType } from 'src/app/core/types/weather-type';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  weatherData: WeatherType[] = [];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.fetchLocations();
  }

  fetchLocations() {
    this.weatherService.weather
    .subscribe((res) => {this.weatherData = res})
  }

}
