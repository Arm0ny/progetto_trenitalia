import {Component, OnInit} from '@angular/core';
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
  isEmailSent: boolean = false;

  constructor(private formBuilder : FormBuilder, private emailService : EmailService, private router: Router) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  checkMail() {
    if (this.emailForm.valid) {
      let email = this.emailForm.value.email;
      this.emailService.checkMail(email)
        .subscribe(
          (res) => {
            this.isEmailSent = true;
            this.emailService.setEmailSubject(email)
            this.router.navigate(['email-sent']); // Reindirizza a /email-sent
          },
          (error: any) => {
            console.error(error);
            this.isEmailSent = false;
          }
        );
    }
  }
}
