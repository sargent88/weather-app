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
        key: '38800_PC',
        city: 'Laguna Hills',
        state: 'CA',
        zip_code: 92653,
        forecast: true},
      {id: 2,
        key: '36223_PC',
        city: 'Orem',
        state: 'UT',
        zip_code: 84059,
        forecast: true},
      {id: 5,
        key: '39714_PC',
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
    this.weatherSource.next([...this.weatherSource.getValue(),...weatherObj]);
    console.log('weather source: ', this.weatherSource)
    console.log('weather: ', this.weather)
  }

  addLocation(zip) {
    // console.log('zip in service: ', zip)
    // return this.http.get(`locations/v1/postalcodes/search`)
  }

}
