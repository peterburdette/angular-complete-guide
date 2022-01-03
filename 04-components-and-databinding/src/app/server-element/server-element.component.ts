import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

// it's good practice to include the lifecycle hooks that are implemented
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit
{
  // using typescript to define the type, name and content that will get passed.
  // @Input() is a decorator function that allows the custom selector 'element' to be binded to in the child component (it essentially allows for the data that is passed to be received)
  // 'srvElement' is the property from the parent component that gets passed into @Input() which will create an alias. The 'element' can be used within the component instead of 'srvElement'.
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  // this is executed when any data-bound property of a directive changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  // this is executed on every change detection run
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // this is executed after Angular has fully initialized all content of a directive
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
}
