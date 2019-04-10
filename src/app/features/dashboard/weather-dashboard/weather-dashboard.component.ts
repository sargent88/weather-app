import { Component, OnInit } from '@angular/core';
import { WeatherType } from 'src/app/core/types/weather-type';
import { CacheService } from './../../../core/services/cache.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  weatherData: WeatherType[] = [];

  constructor(
    private cacheService: CacheService
  ) { }

  ngOnInit() {
    const weatherObservable = this.cacheService.getWeather();
    weatherObservable.subscribe((weather: WeatherType[]) => {
      this.weatherData = weather;
    })
  }

}
