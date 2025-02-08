import { Directive, inject, ViewContainerRef } from "@angular/core";

@Directive({ selector: "[selector-name]" })
export class LoadMfe {
  private readonly vcr = inject(ViewContainerRef);

}
