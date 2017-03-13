import { ChartsModule } from './../charts/charts.module';
// import { chartsrouting } from './../charts/charts-routing.module';
// import { charsroutingB } from './../charts/charts-routing.module';
import { FlotComponent } from './../charts/flot/flot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './../cards/cards.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { Layout1Component } from './layout1/layout1.component';
import { Layout2Component } from './layout2/layout2.component';
import { fallbackRoute } from './../fallback-route';

const routes: Routes = [
  {
    path: 'login', component: Layout1Component
  },
  {
    path: 'content',
    component: Layout2Component,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:number', component: CardsComponent },

      //A.
      // {
      //   path: 'charts',        
      //   children: chartsrouting //陣列        
      // }

      //B.
      //charsroutingB //物件

      //C.
      {
        path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule' //延遲載入, 保哥講義有, 直接放module, 
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
