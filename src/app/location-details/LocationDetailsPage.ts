import { AlertController } from '@ionic/angular';
import { Place } from './../model/place.model';
import { LocationsService } from './../serivces/locations.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {


  private currentPlace: Place;

  constructor(private locService: LocationsService,
    private camera: Camera,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.currentPlace = this.locService.currentLocation;
  }


  async onTakePicture() {
    const options1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true
    };

    const options2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true
    };

    const alert = await this.alertCtrl.create({
      header: 'Confirmation !',
      message: 'Message <strong>source ?</strong> !!!',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.getPicture(options1);
          }
        },
        {
          text: 'Library',
          handler: () => {
            this.getPicture(options2);
          }
        }
      ]
    });
    await alert.present();
  }


  private getPicture(params: CameraOptions) {
    this.camera.getPicture(params)
      .then(data => {
        let base64Image = 'data:image/jpeg;base64,' + data;
        //this.currentPlace.photos.push(base64Image);
        this.locService.addImage(base64Image, this.currentPlace.timestamp);
      });
  }

}
