import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.sass']
})
export class RedirectComponent implements OnInit{
  constructor(private router : Router) {
  }

  ngOnInit(): void {
    // Effettua il reindirizzamento all'URL desiderato quando il componente viene inizializzato
    this.router.navigate(['https://www.meetravel.it']);
  }
}
