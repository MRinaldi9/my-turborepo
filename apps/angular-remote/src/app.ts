import { APP_BASE_HREF } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  providers: [],
  template: `
    <p>Internal Remote</p>
    <a routerLink="path1">Path1</a>
    <router-outlet />
  `,
})
export default class App {
  private readonly router = inject(Router);
  constructor() {
    console.log(this.router);
  }
}
