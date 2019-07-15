import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-phoenix',
  templateUrl: './phoenix.component.html',
  styleUrls: ['./phoenix.component.css']
})

export class PhoenixComponent implements OnInit {
  weather = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(){
    let observable = this._httpService.getPhoenix();
    observable.subscribe(data => {
      this.weather = data;
      console.log(data['main']['temp']);
    })
  }

}
