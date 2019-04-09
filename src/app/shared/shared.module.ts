import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { FCPipe } from './pipes/f-c.pipe';
import { TrueFalsePipe } from './pipes/true-false.pipe';

@NgModule({
  declarations: [
    FCPipe,
    TrueFalsePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FCPipe,
    TrueFalsePipe
  ]
})
export class SharedModule { }
