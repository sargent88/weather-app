import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    LayoutComponent,
    AppRoutingModule
  ],
  providers: [
    
  ]
})
export class CoreModule { }
