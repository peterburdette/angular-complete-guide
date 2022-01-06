import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

// This directive is best practice
// Now why is it a better approach? Angular is not limited to running in the browser here, it for example also works with service workers and these are environments where you might not have access to the DOM.
@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  // the property decorator @HostBinding() takes a string argument which defines which property of the hosting element we want to bind.
  @HostBinding("style.backgroundColor") backgroundColor: string =
    this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // setStyle() takes two args. The first is the targeted element, the second is the css property style we want to use and the third arg is the value that is to be assigned to the property. The fourth arg is optional and it is a flag (e.g. if you want to set '!important')
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");

    this.backgroundColor = this.defaultColor;
  }

  // @HostListener directive that takes one argument as a string and works in tandem with a method that will be executed. 'Mouseenter' and 'mouseleave' were chosen as args because they are events that are supported by DOM elements.
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
