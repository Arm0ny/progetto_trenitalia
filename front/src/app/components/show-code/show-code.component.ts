import {Component, Input, OnInit} from '@angular/core';
import {EmailService} from "../../services/email.service";
import {CodeService} from "../../services/code.service";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.sass']
})
export class ShowCodeComponent implements  OnInit{

  constructor(private codeService : CodeService, private clipboard : Clipboard) { }

  @Input() token : string = ""
  promo_code : string = ""
  message?: string

  ngOnInit() {
    this.codeService.getCode(this.token)
      .subscribe(
        res => this.promo_code = res.promo_code,
          err => this.message=err.error.message

      )
  }

  copyCode($event: any){
    this.clipboard.copy(this.promo_code)
    $event.target.textContent = "Copiato!"
  }

  openAppStore() {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      // Apri App Store su iOS
      window.open('https://apps.apple.com/it/app/meetravel/id1532228470');
    } else if (isAndroid) {
      // Apri Google Play Store su Android
      window.open('https://play.google.com/store/apps/details?id=com.meetravel&gl=IT');
    } else {
      // Codice per browser web o altri dispositivi
      window.open('https://meetravel.it/entra-in-app/', '_blank');
    }
  }



}
