import { HomeComponent } from './home/home.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { HoustonComponent } from './houston/houston.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { NewyorkcityComponent } from './newyorkcity/newyorkcity.component';
import { PhiladelphiaComponent } from './philadelphia/philadelphia.component';
import { PhoenixComponent } from './phoenix/phoenix.component';
import { SanantonioComponent } from './sanantonio/sanantonio.component';
import { SandiegoComponent } from './sandiego/sandiego.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { IndianapolisComponent } from './indianapolis/indianapolis.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'houston', component: HoustonComponent },
  { path: 'losangeles', component: LosangelesComponent },
  { path: 'newyorkcity', component: NewyorkcityComponent },
  { path: 'philadelphia', component: PhiladelphiaComponent },
  { path: 'phoenix', component: PhoenixComponent },
  { path: 'sanantonio', component: SanantonioComponent },
  { path: 'sandiego', component: SandiegoComponent },
  { path: 'sanjose', component: SanjoseComponent },
  { path: 'indianapolis', component: IndianapolisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(routes);