import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageRoutes} from "src/app/_constants/page-routes";
import {LoginComponent} from "src/app/login/login.component";
import {RegistrationComponent} from "src/app/registration/registration.component";
import {LobbyComponent} from "src/app/lobby/lobby.component";

const routes: Routes = [
  {
    path: PageRoutes.login,
    component: LoginComponent
  },
  {
    path: PageRoutes.registration,
    component: RegistrationComponent
  },
  {
    path: PageRoutes.lobby,
    component: LobbyComponent
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: `/${PageRoutes.login}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
