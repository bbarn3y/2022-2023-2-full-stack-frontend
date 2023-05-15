import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageRoutes} from "src/app/_constants/page-routes";
import {PublicGuard} from "src/app/_guards/public.guard";
import {SessionGuard} from "src/app/_guards/session.guard";
import {LoginComponent} from "src/app/login/login.component";
import {RegistrationComponent} from "src/app/registration/registration.component";
import {LobbyComponent} from "src/app/lobby/lobby.component";

const routes: Routes = [
  {
    path: PageRoutes.login,
    component: LoginComponent,
    canActivate: [PublicGuard],
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: PageRoutes.registration,
    component: RegistrationComponent,
    canActivate: [PublicGuard],
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: PageRoutes.lobby,
    component: LobbyComponent,
    canActivate: [SessionGuard],
    loadChildren: () => import('./inner/inner.module').then((m) => m.InnerModule)
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
