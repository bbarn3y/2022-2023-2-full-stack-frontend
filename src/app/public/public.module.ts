import { NgModule } from '@angular/core';
import {LoginComponent} from "src/app/login/login.component";
import {RegistrationComponent} from "src/app/registration/registration.component";
import {SharedModule} from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PublicModule { }
