import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact ={
    name: "Miliari Adnane",
    email:"miliari.adnane@gmail.com",
    tel:"0637819957",
    logo:"assets/images/logo.png",
    location:"assets/images/loc.png"
  }

  constructor() {}

}
