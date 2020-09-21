import { Router } from '@angular/router';
import { LocationsService } from './../serivces/locations.service';
import { Place } from './../model/place.model';
import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation: Geolocation, 
              private locService: LocationsService,
              private navCtrl: NavController) { }

  ngOnInit() {
  }

  onAddLocation(data:Place) {
    data.timestamp = new Date().getTime();
    data.photos=[];

    this.geolocation.getCurrentPosition().then((resp)=>{
      data.coordinates={
        longitude:resp.coords.longitude,
        latitude:resp.coords.latitude
      }
      this.locService.addLocation(data);
      this.navCtrl.back();
    });
  }

}
