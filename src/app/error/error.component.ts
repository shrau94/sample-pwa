import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
          .then((reg) => {
            console.log('Service worker registered.', reg);
          });
      });
    }
    navigator.serviceWorker.ready.then(function(swRegistration) {
      return swRegistration.sync.register('myFirstSync');
    });
  }

}
