import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageRoutes} from "src/app/_constants/page-routes";
import {LoginComponent} from "src/app/login/login.component";
import {RegistrationComponent} from "src/app/registration/registration.component";
import {LobbyComponent} from "src/app/lobby/lobby.component";
import {PublicGuard} from "src/app/_guards/public.guard";
import {SessionGuard} from "src/app/_guards/session.guard";

const routes: Routes = [
  {
    path: PageRoutes.login,
    component: LoginComponent,
    canActivate: [PublicGuard]
  },
  {
    path: PageRoutes.registration,
    component: RegistrationComponent,
    canActivate: [PublicGuard]
  },
  {
    path: PageRoutes.lobby,
    component: LobbyComponent,
    canActivate: [SessionGuard]
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
