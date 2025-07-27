import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-path1",
  template: ` <h1>daje</h1> `,
})
export default class Path1 {
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  constructor() {
    console.log(this.router);
  }
}
