import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.sass']
})
export class RedirectComponent implements OnInit{


  ngOnInit() {
    window.location.href = 'https://meetravel.it/'
  }
}
