import { Layout2Component } from './../layout/layout2/layout2.component';
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';

//C.
//所以底下的router寫法是要放在原本children位置
const routes: Routes = [
  //這裡直接mark掉也沒關係, 因為不需要了
  {
    path: 'flot',
    component: FlotComponent
  }
];

// //A. children裡面要放的是陣列, Routes
// export const chartsrouting: Routes = [
//   {
//     path: 'flot',
//     component: FlotComponent
//   }
// ];

// //B.
// export const charsroutingB: Route = //沒有s的喔, 只是一個物件
// {
//   path: 'charts',
//   children:
//   [
//     { path: '', redirectTo: 'flot', pathMatch: 'full' }
    
//   ]
// }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }  //你要import去哪  //現在chartsrouting的位置

