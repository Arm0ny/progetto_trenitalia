import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes, withComponentInputBinding} from '@angular/router';
import {EnterEmailComponent} from "./components/enter-email/enter-email.component";
import {EmailSentComponent} from "./components/email-sent/email-sent.component";
import {ShowCodeComponent} from "./components/show-code/show-code.component";

const routes: Routes = [
  {path:"check-email", component: EnterEmailComponent},
  {path:"email-sent", component:EmailSentComponent},
  {path:"get-code", component:ShowCodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule { }
