import {Component, Input, OnInit} from '@angular/core';
import {EmailService} from "../../services/email.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-code-only',
  templateUrl: './get-code-only.component.html',
  styleUrls: ['./get-code-only.component.sass']
})
export class GetCodeOnlyComponent implements OnInit{
  @Input() email : string = "";

  constructor(private emailService : EmailService, private router : Router) { }

   ngOnInit() {
      if(!this.email){
          this.router.navigate(['enter-email'])
      }
   }

    checkMail() {
    if(this.email) {
      this.emailService.checkMail(this.email)
          .subscribe(
          (res) => {
            this.emailService.email = this.email
            this.router.navigate(['email-sent']); // Reindirizza a /email-sent
          },
          (error: any) => {
            console.error(error);
          }
        );

    }
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
