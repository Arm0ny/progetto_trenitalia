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
    });
  }

  checkMail() {
      //se viene passato il parametro emailParam usa quello altrimenti leggi il form
      let email = this.emailForm.value.email;
      this.emailService.checkMail(email)
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
