/**
 * Dynamic configuration
 * ngx-translate
 * Control and group level validation
 * Global events (event.service)
 * Multi-module project
 * webpack-bundle-analyzer
 * pipe?
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LobbyComponent } from './lobby/lobby.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import { ArticleComponent } from './article/article.component';
import {NzListModule} from "ng-zorro-antd/list";

const zorroImports = [
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzListModule
];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LoginComponent,
    RegistrationComponent,
    LobbyComponent
  ],
  imports: [
    ...zorroImports,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
