import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getChicago(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getDallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getHouston(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Houston&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getLosAngeles(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }
  getNewYorkCity(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getPhiladelphia(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getPhoenix(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getSanAntonio(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Antonio&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getSanDiego(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Diego&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getSanjose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San+Jose&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

  getIndianapolis(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&APPID=EnterOpenWeatherMapAPIIDHere');
  }

}