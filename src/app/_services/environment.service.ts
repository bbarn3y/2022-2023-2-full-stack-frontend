import { Injectable } from '@angular/core';
import {Environment} from "src/app/_models/environment.model";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  static config: Environment;

  constructor() { }

  static fetchConfig() {
    return fetch('/assets/environment.json').then((response) => response.json());
  }

  public static loadConfig(): Promise<Environment> {
    if (EnvironmentService.config) {
      return new Promise<Environment>((resolve, reject) =>
        resolve(EnvironmentService.config)
      );
    } else {
      return EnvironmentService.fetchConfig().then((environment) => {
        EnvironmentService.config = environment;
        return environment;
      })
    }
  }
}
