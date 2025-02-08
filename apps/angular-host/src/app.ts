import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  template: `
    <h1>Host</h1>
    <router-outlet />
  `,
})
export class App {
  constructor() {}
  pippo = [1, 2, 3];
}
