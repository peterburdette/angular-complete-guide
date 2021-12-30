import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // the below are properties
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // 'bpCreated' is the alias
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  // nameInput is the value that is passed from the local reference 'serverNameInput' in the template file
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.newServerContent,
    });
  }
}
