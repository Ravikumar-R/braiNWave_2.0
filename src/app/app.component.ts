import { Component } from '@angular/core';
import { CentraliseddbService } from './centraliseddb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sifi';
  constructor(private centraliseddbService: CentraliseddbService) {
    // this.centraliseddbService.clearAll();
  }
}
