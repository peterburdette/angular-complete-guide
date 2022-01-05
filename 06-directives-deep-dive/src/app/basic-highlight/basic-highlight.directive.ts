import { Directive, ElementRef, OnInit } from "@angular/core";

// this directive is not best practice
// @Directive is a decorator
@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  // 'elementRef' is the current element that this directive is on. We are able to use this data in our class now.
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
