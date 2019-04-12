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
    this.getWeather();
  }

  fetchLocations() {
    this.weatherService.weather
    .subscribe(
      (res) => {this.weatherData = res},
      () => {},
      () => {
        // this.getWeather();
      }
    )
  }

  getWeather() {
    for (let i = 0; i < this.weatherData.length; i++) {
      const element = this.weatherData[i];
      if(element.forecast) {
        
      }else {

      }
    }
  }

      // This is just setting the object to the perdefined Weater Type variable that I defined earlier. Ideally a backend would help clean this up as the res would be better suited to our request //
      // let key = localStorage.getItem('apiKey');

}
