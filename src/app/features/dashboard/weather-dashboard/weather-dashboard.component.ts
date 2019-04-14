import { Component, OnInit } from '@angular/core';
import { WeatherType } from 'src/app/core/types/weather-type';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss']
})
export class WeatherDashboardComponent implements OnInit {
  weatherLocations: WeatherType[] = [];
  weatherData: any[] = [];
  metric: boolean = false;

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
      (res) => {this.weatherLocations = res}
    )
  }

  getWeather() {
    // This is just setting the object to the perdefined Weater Type variable that I defined earlier. Ideally a backend would help clean this up as the res would be better suited to our request //
    let key = localStorage.getItem('apiKey');
    for (let i = 0; i < this.weatherLocations.length; i++) {
      const element = this.weatherLocations[i];
      let individualWeatherData = {
        city: element.city,
        state: element.state,
        zip_code: element.zip_code,
        temperature: '',
        condition: '',
        forecast: element.forecast,
        five_day: []
      }
      // Get current conditions for all locations //
      this.weatherService.getWeather(element.code, key)
        .subscribe(
          (res) => {
            individualWeatherData.temperature = res[0].Temperature.Imperial.Value;
            individualWeatherData.condition = res[0].WeatherText;
            // Check to see if user wants forecast, get that data, and push it to weatherData array //
            if(element.forecast) {
              this.weatherService.get5DayForecast(element.code, key)
                .subscribe(
                  (res) => {
                    let dailyForecast = res['DailyForecasts'];
                    for (let j = 0; j < dailyForecast.length; j++) {
                      const element = dailyForecast[j];
                      let forecastObj = {
                        date: element.Date,
                        min: element.Temperature.Minimum.Value,
                        max: element.Temperature.Maximum.Value,
                      };
                      individualWeatherData.five_day.push(forecastObj);
                    }
                  }
                )
            }
          }
        )
      // push all compiled results from get requests done through for loops (not ideal...but from what I can see you can only return one res at a time from AccuWeather's API) into original array for display on HTML //
      this.weatherData.push(individualWeatherData);
    }
  }

  metricToggle(event) {
    this.metric = event.checked;
  }

}
