import { Component, OnInit } from '@angular/core';
import {GeneratorService} from "src/app/_services/generator.service";
import {Article} from "src/app/_models/article.model";

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  articles: Article[] = [];

  window = window;

  constructor(private generatorService: GeneratorService) { }

  ngOnInit(): void {
    this.articles = this.generatorService.generateArticles(50);
    console.log('articles', this.articles);
  }

}
