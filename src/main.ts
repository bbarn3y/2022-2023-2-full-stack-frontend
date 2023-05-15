import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {EnvironmentService} from "src/app/_services/environment.service";

EnvironmentService.loadConfig().then((configuration) => {
  if (configuration.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

})
