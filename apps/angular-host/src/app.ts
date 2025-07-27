import { httpResource } from "@angular/common/http";
import { Component, effect } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { broadcast } from "@repo/orchestrator";
import { SolidRender } from "./core/solid-render";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink, SolidRender],
  template: `
    <div solidRender></div>
    <h1>Host</h1>
    <a routerLink="test">Test</a>

    <router-outlet />
  `,
})
export class App {
  user = httpResource(() => "https://jsonplaceholder.typicode.com/users/1");
  constructor() {
    effect(() => {
      if (this.user.hasValue()) {
        broadcast("user", this.user.value());
      }
    });
  }
}
