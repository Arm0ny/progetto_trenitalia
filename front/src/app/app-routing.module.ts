import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {EnterEmailComponent} from "./components/enter-email/enter-email.component";
import {EmailSentComponent} from "./components/email-sent/email-sent.component";
import {ShowCodeComponent} from "./components/show-code/show-code.component";
import {GetCodeOnlyComponent} from "./components/get-code-only/get-code-only.component";
import {RedirectComponent} from "./components/redirect/redirect.component";
import {StoreRedirectComponent} from "./components/redirect/store-redirect/store-redirect.component";

const routes: Routes = [
  {path:"", component: RedirectComponent},
  {path:"enter-email", component: EnterEmailComponent},
    {path:"email-sent", component:EmailSentComponent},
    {path:"code", component:ShowCodeComponent},
    {path:"code-only", component:GetCodeOnlyComponent},
  {path:"stores", component: StoreRedirectComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
