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



}
