import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  baseUrl = environment.BACKEND_URL + "/api"


  constructor(private http : HttpClient) { }

  getCode(token: string){
    return this.http.post<{ message?: string, promo_code: string }>(this.baseUrl + "/get-code", {token})
  }
}
