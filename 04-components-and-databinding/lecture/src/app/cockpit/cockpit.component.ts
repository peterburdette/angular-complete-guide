import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  // newServerContent = '';

  // @ViewChild allows us to get access to local references and any element directly from within the typescript code
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  // nameInput is the value that is passed from the local reference 'serverNameInput' in the template file
  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log(nameInput.value);
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value,
    });
  }
}
