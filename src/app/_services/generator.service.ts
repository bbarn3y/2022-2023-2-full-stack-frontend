import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import {Article} from "src/app/_models/article.model";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generateArticle(): Article {
    return new Article(
      Math.floor(Math.random() * 1000000),
      faker.animal.crocodilia(),
      faker.hacker.phrase(),
      faker.image.food(50, 50, true),
      faker.date.past().getTime(),
      { id: Math.floor(Math.random() * 1000), name: faker.name.fullName(), image: faker.image.avatar()},
      faker.date.past().getTime(),
    )
  }

  generateArticles(n: number): Article[] {
    return new Array(n).fill(null).map(() => this.generateArticle());
  }
}
