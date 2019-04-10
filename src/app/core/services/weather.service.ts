import { Observable } from 'rxjs';
import { WeatherType } from '../types/weather-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: WeatherType[] = [
    {id: 1,
      city: 'Laguna Hills',
      state: 'CA',
      zip_code: 92653,
      forecast: true},
    {id: 2,
      city: 'Orem',
      state: 'UT',
      zip_code: 84058,
      forecast: true},
    {id: 3,
      city: 'Dallas',
      state: 'TX',
      zip_code: 75166,
      forecast: false},
    {id: 4,
      city: 'New York',
      state: 'NY',
      zip_code: 10003,
      forecast: false},
    {id: 5,
      city: 'Cupertino',
      state: 'CA',
      zip_code: 95014,
      forecast: true},
  ]
  public _cacheData: any;

  constructor() { }

  public getWeather(): any {
    const weatherObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.weather);
      }, 1000)
    })
    return weatherObservable
  }
}
