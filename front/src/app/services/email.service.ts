import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, ReplaySubject, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http : HttpClient ) { }

  emailSubject$ = new ReplaySubject<string>(1)

  baseUrl = environment.BACKEND_URL + "/api"

  emailOf() : Observable<string>{
    return this.emailSubject$
  }

  setEmailSubject(email : string){
    this.emailSubject$.next(email)
  }

  checkMail(email : string){
    return this.http.post(this.baseUrl + "/check-email", {email})
  }

  sendMail(){
    return this.emailSubject$.pipe(
      switchMap((email) => {
        return this.http.post(this.baseUrl + "/send-email", {email})
      })
    )
  }


}
