import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-store-redirect',
  templateUrl: './store-redirect.component.html',
  styleUrls: ['./store-redirect.component.sass']
})
export class StoreRedirectComponent implements AfterViewInit {

  constructor(router : Router) { }

  ngAfterViewInit() {
    this.openAppStore()
  }


  openAppStore() {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      window.location.href = 'https://apps.apple.com/it/app/meetravel/id1532228470';
    } else if (isAndroid) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.meetravel&gl=IT';
    } else {
      window.location.href = 'https://meetravel.it/entra-in-app/';
    }
  }

}
