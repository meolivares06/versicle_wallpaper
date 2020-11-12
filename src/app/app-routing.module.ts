import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtroComponent} from "./components/otro/otro.component";
import {VersicleComponent} from "./components/versicle/versicle.component";
import {WrapperComponent} from "./components/wrapper/wrapper.component";


const routes: Routes = [
  {
    path: 'main', component: VersicleComponent
  },
  {
    path: 'otro', component: OtroComponent
  },
  {
    path: 'wrapper', component: WrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
