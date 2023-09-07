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
}
