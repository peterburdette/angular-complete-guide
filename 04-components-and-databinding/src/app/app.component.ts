import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // test server content that will display in the browser
  serverElements = [
    { type: 'server', name: 'test name', content: 'test content' },
  ];
}
