import { Routes } from "@angular/router";
import App from "./app";

export default [
  { path: "", component: App },
  { path: "path1", loadComponent: () => import("./path1") },
] satisfies Routes;
