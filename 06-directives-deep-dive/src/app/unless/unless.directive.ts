import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  // 'set' is a setter keyword which turns this property into a method (it is still technically a property) - this is just a setter of the property which is a method which gets executed whenever the property changes and it of course changes whenever it changes outside of this directive.
  // IMPORTANT: the property 'appUnless' needs to share the same name as the directive.
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
