import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { FlotComponent } from './flot/flot.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [
    //現在這個module要的只是flot componet宣告而已
    FlotComponent
  ]
})
export class ChartsModule { } //loadchildren放的是module
