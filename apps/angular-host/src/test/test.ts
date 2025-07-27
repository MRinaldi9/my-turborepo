import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-test",
  template: ` <h1>Test</h1> `,
})
export class Test {
  private readonly router = inject(Router);
  constructor() {
    console.log(this.router);
  }
}
