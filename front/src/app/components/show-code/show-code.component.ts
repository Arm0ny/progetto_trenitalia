import {Component, Input, OnInit} from '@angular/core';
import {EmailService} from "../../services/email.service";
import {CodeService} from "../../services/code.service";

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.sass']
})
export class ShowCodeComponent implements  OnInit{

  constructor(private codeService : CodeService) { }

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



}
