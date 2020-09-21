import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: MenuPage, 
    children:[
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      { path: 'meteo', loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)},
      { path: 'gallery', loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)},
      { path: 'locations', loadChildren: () => import('../locations/locations.module').then( m => m.LocationsPageModule)},
      { path: 'new-location', loadChildren: () => import('../new-location/new-location.module').then( m => m.NewLocationPageModule)},
      { path: 'location-details', loadChildren: () => import('../location-details/location-details.module').then( m => m.LocationDetailsPageModule)},
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
