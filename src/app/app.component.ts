import { WebWorkerService } from './web-worker.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-worker-example';

  constructor(private webWorker: WebWorkerService){
    
  }
}
