import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  // using typescript to define the type, name and content that will get passed.
  // @Input() is a decorator function that allows the custom selector 'element' to be binded to in the child component (it essentially allows for the data that is passed to be received)
  @Input() element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
