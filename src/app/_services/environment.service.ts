import { Injectable } from '@angular/core';
// import { Environment } from 'src/environments/environment.entities';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  // static config: Environment = null;
  //
  // constructor() {}
  //
  // static fetchConfig(): Promise<Environment> {
  //   return fetch('/assets/environment.json').then(response => response.json());
  // }
  //
  // public static loadConfig(): Promise<Environment> {
  //   if (EnvironmentService.config) {
  //     return new Promise<Environment>((resolve, reject) => {
  //       resolve(EnvironmentService.config);
  //     });
  //   } else {
  //     return EnvironmentService.fetchConfig().then((configuration: Environment) => {
  //       EnvironmentService.config = configuration;
  //       return EnvironmentService.config;
  //     });
  //   }
  // }

}
