import { Directive, ElementRef, inject } from "@angular/core";
import { render } from "solid-js/web";

@Directive({ selector: "[solidRender]" })
export class SolidRender {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    import("solid-header/remote-app").then((m) =>
      render(m.default, this.host.nativeElement)
    );
  }
}
