import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterEmailComponent } from './components/enter-email/enter-email.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import {HeadersInterceptor} from "./interceptors/headers.interceptor";
import { EmailSentComponent } from './components/email-sent/email-sent.component';
import { ShowCodeComponent } from './components/show-code/show-code.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EnterEmailComponent,
    EmailSentComponent,
    ShowCodeComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      NoopAnimationsModule
    ],
    providers: [
      // Registra l'interceptor come provider globale
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HeadersInterceptor,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
