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
  weatherData: any[] = [
    {city: "Laguna Hills",
    condition: "Clear",
    five_day: [
      {date: "2019-04-13T07:00:00-07:00", min: 53, max: 78},
      {date: "2019-04-14T07:00:00-07:00", min: 52, max: 73},
      {date: "2019-04-15T07:00:00-07:00", min: 56, max: 69},
      {date: "2019-04-16T07:00:00-07:00", min: 51, max: 65},
      {date: "2019-04-17T07:00:00-07:00", min: 53, max: 74}],
    forecast: true,
    state: "CA",
    temperature: 68,
    zip_code: 92653},
    {city: "Orem",
    condition: "Clear",
    five_day: [
      {date: "2019-04-13T07:00:00-06:00", min: 39, max: 53},
      {date: "2019-04-14T07:00:00-06:00", min: 46, max: 58},
      {date: "2019-04-15T07:00:00-06:00", min: 44, max: 56},
      {date: "2019-04-16T07:00:00-06:00", min: 39, max: 48},
      {date: "2019-04-17T07:00:00-06:00", min: 35, max: 53}],
    forecast: true,
    state: "UT",
    temperature: 52,
    zip_code: 84059},
    {city: "Cupertino",
    condition: "Cloudy",
    five_day: [],
    forecast: false,
    state: "CA",
    temperature: 63,
    zip_code: 95014}
  ];
  metric: boolean = false;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.fetchLocations();
    // this.getWeather();
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
      // push all compiled results from get requests done through for loops (not ideal...) into original array for display on HTML //
      this.weatherData.push(individualWeatherData);
    }
    console.log(this.weatherData)
  }

  metricToggle(event) {
    this.metric = event.checked;
  }

}
