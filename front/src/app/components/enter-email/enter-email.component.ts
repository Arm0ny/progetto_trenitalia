import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms"
import {EmailService} from "../../services/email.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.sass']
})
export class EnterEmailComponent implements OnInit{
  emailForm!: FormGroup;

  constructor(private formBuilder : FormBuilder, private emailService : EmailService, private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      privacyCheck: [false, [Validators.requiredTrue]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    });
  }

  checkMail() {
    if (this.emailForm.valid) {
      let {email, first_name, last_name} = this.emailForm.getRawValue();
      this.emailService.checkMail(email, first_name, last_name)
        .subscribe(
          (res) => {
            this.emailService.email = email
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
