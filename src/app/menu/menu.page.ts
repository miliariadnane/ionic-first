import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../serivces/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus=[
    {title:"Home",url:"/menu/home",icon:'home'},
    {title:"Meteo",url:"/menu/meteo",icon:'cloud-circle'},
    {title:"Gallery",url:"/menu/gallery",icon:'images'},
    {title:"Locations",url:"/menu/locations",icon:'location'},
    {title:"Logout",url:"logout",icon:'log-out'},
    {title:"Exit",url:"Exit",icon:'power'},
  ]

  constructor(private router:Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onMenuAction(m){
    if(m.url == 'logout'){
      this.authService.logout();
      this.router.navigateByUrl('/login')
    }
    else if(m.url == 'Exit'){
      navigator['app'].exitApp();
    }
    else{
      this.router.navigateByUrl(m.url);
    }
    
  }

}
