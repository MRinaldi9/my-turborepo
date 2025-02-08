import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";
import App from "./app";
import { Router } from "@angular/router";
import routes from "./app.routes";

import {
  inject,
  provideEnvironmentInitializer,
  providePlatformInitializer,
} from "@angular/core";

console.log("daje");

bootstrapApplication(App);
