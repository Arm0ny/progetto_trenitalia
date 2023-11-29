import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterEmailComponent } from './components/enter-email/enter-email.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http"
import {HeadersInterceptor} from "./interceptors/headers.interceptor";
import { EmailSentComponent } from './components/email-sent/email-sent.component';
import { ShowCodeComponent } from './components/show-code/show-code.component';
import { GetCodeOnlyComponent } from './components/get-code-only/get-code-only.component';
import {SetCsrfInterceptor} from "./interceptors/set-csrf.interceptor";
import {CookieService} from "ngx-cookie-service";
import { LoginComponent } from './components/auth/login/login.component';
import { BackofficeHomeComponent } from './components/backoffice-home/backoffice-home.component';
import { GiftcodePopupComponent } from './components/giftcode-popup/giftcode-popup.component';
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterEmailComponent,
    EmailSentComponent,
    ShowCodeComponent,
    GetCodeOnlyComponent,
    LoginComponent,
    BackofficeHomeComponent,
    GiftcodePopupComponent,
    RedirectComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientXsrfModule,
        FormsModule,
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HeadersInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SetCsrfInterceptor,
        multi: true
      },
      CookieService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
