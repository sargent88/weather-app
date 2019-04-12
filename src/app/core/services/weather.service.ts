import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherSource = new BehaviorSubject(
    [
      {key: '38800_PC',
        city: 'Laguna Hills',
        state: 'CA',
        zip_code: 92653,
        forecast: true},
      {key: '36223_PC',
        city: 'Orem',
        state: 'UT',
        zip_code: 84059,
        forecast: true},
      {key: '39714_PC',
        city: 'Cupertino',
        state: 'CA',
        zip_code: 95014,
        forecast: false},
    ]
  )
  weather = this.weatherSource.asObservable();

  constructor(
    private http: HttpClient
  ) { }
  
  updateLocations(weatherObj) {
    this.weatherSource.next(
      [...this.weatherSource.getValue(),...weatherObj]
    );
  }

  deleteLocation() {
    this.weatherSource.next(
      [...this.weatherSource.getValue()]
      )
  }

  addLocation(zip, key) {
    return this.http.get(`${environment.baseUrl}locations/v1/postalcodes/US/search?apikey=${key}&q=${zip}`)
  }

  getWeather(code, key) {
    return this.http.get(`${environment.baseUrl}forecasts/v1/daily/5day/${code}?apikey=${key}`)
  }

  get5DayForecast(code, key) {
    return this.http.get(`${environment.baseUrl}currentconditions/v1/${code}?apikey=${key}`)
  }

}
