import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { ChartsModule } from './charts/charts.module';
import { Layout1Component } from './layout/layout1/layout1.component';
import { Layout2Component } from './layout/layout2/layout2.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    CardsComponent,
    Layout1Component,
    Layout2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    AppRoutingModule,
    //ChartsModule,  //是只有用C這邊才可以不import對吧?
    //已經放在layoutModule, 這裡完全不用他
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
