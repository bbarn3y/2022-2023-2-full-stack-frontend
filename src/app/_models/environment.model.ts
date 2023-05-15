export class Environment {
  apiUrl: string;
  production: boolean;

  constructor(apiUrl: string, production: boolean) {
    this.apiUrl = apiUrl;
    this.production = production;
  }
}
