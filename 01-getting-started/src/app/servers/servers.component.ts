import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;

    this.servers.push(this.serverName);

    this.serverCreationStatus =
      'Server was created. The name is ' + this.serverName;

    console.log(this.servers);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  // Assignment code
  username = '';
  buttonActive = false;

  activateButton(event) {
    if (event.target.value.length > 0) {
      this.buttonActive = true;
    }
  }

  resetInput() {
    this.username = '';
    this.buttonActive = false;
  }
}
