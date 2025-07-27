import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import homeRoutes from "./app.routes";
import { listen } from "@repo/orchestrator";
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
    const actualConfigs = this.router.config;
    this.router.resetConfig([...actualConfigs, ...homeRoutes]);
    listen("user", (user) => console.log(user));
  }
}
