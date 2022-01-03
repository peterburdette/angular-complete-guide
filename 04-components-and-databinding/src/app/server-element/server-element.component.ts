import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})

// it's good practice to include the lifecycle hooks that are implemented
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // using typescript to define the type, name and content that will get passed.
  // @Input() is a decorator function that allows the custom selector 'element' to be binded to in the child component (it essentially allows for the data that is passed to be received)
  // 'srvElement' is the property from the parent component that gets passed into @Input() which will create an alias. The 'element' can be used within the component instead of 'srvElement'.
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  // this grants access to content that is store in another component and then passed on via ng-content.
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

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
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log(
      'text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  // this is executed on every change detection run
  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  // this is executed after Angular has fully initialized all content of a directive
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  // this is executed after the default change detector has completed checking all content of a directive
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // this is executed after Angular has fully initialized a component's view
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text content: ' + this.header.nativeElement.textContent);
    console.log(
      'text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  // this is executed after the default change detector has completed checking a component's view for changes
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  // this is executed when a directive, pipe or service is destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
