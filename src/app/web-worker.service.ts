import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebWorkerService {
  csvParser;

  constructor() { 
    console.log("Initiated");
    this.csvParser = new Worker('assets/web-worker.js');
    this.csvParser.postMessage({value: 100});


    this.csvParser.onmessage = (event: any) => {
      // Recieve data
      console.log(event.data)
    }

  }



}
