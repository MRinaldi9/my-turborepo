import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: ` <h1>daje</h1> `,
})
export default class Path1 {
  private readonly router = inject(Router);
  constructor() {
    console.log(this.router);
  }
}
