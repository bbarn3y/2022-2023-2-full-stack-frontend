import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzListModule} from "ng-zorro-antd/list";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

const zorroImports = [
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzListModule
];

@NgModule({
  declarations: [],
  imports: [
    ...zorroImports,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ...zorroImports,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
