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
import { RedirectComponent } from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterEmailComponent,
    EmailSentComponent,
    ShowCodeComponent,
    GetCodeOnlyComponent,
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
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
