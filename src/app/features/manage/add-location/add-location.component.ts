import { WeatherType } from './../../../core/types/weather-type';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './../../../core/services/weather.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  addLocationForm: FormGroup;
  locationObj: WeatherType;
  
  constructor(
    public dialogRef: MatDialogRef<AddLocationComponent>,
    private fb: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.addLocationForm = this.fb.group({
      zip_code: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  addLocation(obj) {
    // This is just setting the object to the perdefined Weater Type variable that I defined earlier. Ideally a backend would help clean this up as the res would be better suited to our request //
    let key = localStorage.getItem('apiKey');
    this.locationObj = {
      code: '',
      city: '',
      state: '',
      zip_code: obj.zip_code,
      forecast: false
    }
    this.weatherService.addLocation(obj.zip_code, key)
      .subscribe(
        (res) => {
          this.locationObj.code = res[0].Key;
          this.locationObj.city = res[0].LocalizedName;
          this.locationObj.state = res[0].AdministrativeArea.ID;
          // This adds the new locationObj to the cached value in the weather service for access across the app. Takes the place of a post request since there is no backend. //
          this.weatherService.updateLocations(this.locationObj);
        },
        // Not much to do with err right now, this will just dispaly it to the console. //
        (err) => {console.log(err)},
        () => {this.closeDialog();}
      )
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.addLocationForm.reset();
  }

}
