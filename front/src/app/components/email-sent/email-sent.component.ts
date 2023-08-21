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
}
