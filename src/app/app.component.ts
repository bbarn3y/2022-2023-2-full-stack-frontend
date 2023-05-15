import {Component} from '@angular/core';
import {EnvironmentService} from "src/app/_services/environment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = '2022-2023-2-full-stack-frontend';

  constructor() {
    console.log('EnvironmentService.config', EnvironmentService.config);
  }
}
