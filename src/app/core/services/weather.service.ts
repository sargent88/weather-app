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
  )
  weather = this.weatherSource.asObservable();
  //Dummy Authentication
  apiKey: string = localStorage.getItem('apikey');

  constructor(
    private http: HttpClient
  ) { }
  
  updateLocations(weatherObj) {
    this.weatherSource.next(weatherObj);
  }

  addLocation(zip) {
    return this.http.get(`locations/v1/postalcodes/search`)
  }

}
