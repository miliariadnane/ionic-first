import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPageRoutingModule } from './location-details-routing.module';

import { LocationDetailsPage } from "./LocationDetailsPage";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationDetailsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChk81RHncUA8YgYqGVO7YwgWOcEtob6Ts'
    }),
  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
