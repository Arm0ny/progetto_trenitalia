import {Component, OnInit} from '@angular/core';
import {EmailService} from "../../services/email.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.sass']
})
export class EmailSentComponent implements OnInit {
  email? : string

  ngOnInit() {
    this.email = this.emailService.email
  }

  constructor(private emailService : EmailService) { }


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
