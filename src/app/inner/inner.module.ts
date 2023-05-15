import { NgModule } from '@angular/core';
import {SharedModule} from "src/app/shared/shared.module";
import {ArticleComponent} from "src/app/article/article.component";
import {LobbyComponent} from "src/app/lobby/lobby.component";



@NgModule({
  declarations: [
    ArticleComponent,
    LobbyComponent
  ],
  imports: [
    SharedModule
  ]
})
export class InnerModule { }
