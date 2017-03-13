import { ChartsModule } from './../charts/charts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
    //ChartsModule //用延遲載入, 連這裡都不用放了喔~  //所以AB這裡就有需要?yes//瞭改!
  ],
  declarations: []
})
export class LayoutModule { }
