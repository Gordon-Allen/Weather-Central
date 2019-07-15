import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { HomeComponent } from './home/home.component';
import { HoustonComponent } from './houston/houston.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { NewyorkcityComponent } from './newyorkcity/newyorkcity.component';
import { PhiladelphiaComponent } from './philadelphia/philadelphia.component';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { SanantonioComponent } from './sanantonio/sanantonio.component';
import { SandiegoComponent } from './sandiego/sandiego.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { IndianapolisComponent } from './indianapolis/indianapolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    DallasComponent,
    HomeComponent,
    HoustonComponent,
    LosangelesComponent,
    NewyorkcityComponent,
    PhiladelphiaComponent,
    PhoenixComponent,
    SanantonioComponent,
    SandiegoComponent,
    SanjoseComponent,
    IndianapolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
