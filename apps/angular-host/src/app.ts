import { Component, effect } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink, RouterOutlet } from "@angular/router";
import { getUser, user$ } from "@common-store/auth";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Host</h1>
    <a routerLink="test">Test</a>

    <router-outlet />
  `,
})
export class App {
  user = toSignal(user$);
  constructor() {
    getUser();
    effect(() => console.log(this.user()));
  }
}
