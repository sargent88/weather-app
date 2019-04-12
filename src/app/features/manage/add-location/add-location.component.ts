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
    let id = Number(localStorage.getItem('idNumber'));
    this.weatherService.addLocation(obj.zip_code);
    let newObj = {
      id: id,
      city: 'Random',
      state: 'SD',
      zip_code: obj.zip_code,
      forecast: false
    }
    this.weatherService.updateLocations(newObj)
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.addLocationForm.reset();
  }

}
