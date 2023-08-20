import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable, ReplaySubject, Subject, switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient ) { }

  private e = ""

  baseUrl = environment.BACKEND_URL + "/api"

  get email() : string{
    return this.e
  }

  set email(email : string){
    this.e = email
  }

  checkMail(email : string){
    return this.http.post(this.baseUrl + "/check-email", {email})
  }

  sendMail(){
    this.http.post(this.baseUrl + "/send-email", {email: this.e}).subscribe(
      res => console.log(this.e)
    )
  }


}
