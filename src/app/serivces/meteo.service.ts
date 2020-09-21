import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient: HttpClient) { }

  public getmeteoData(city:string) {
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=e75c324ae469a8ec0e833f647216f399")
  }
}
