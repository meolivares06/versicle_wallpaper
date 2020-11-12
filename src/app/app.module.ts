import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersicleComponent } from './components/versicle/versicle.component';
import { OtroComponent } from './components/otro/otro.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    VersicleComponent,
    OtroComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
