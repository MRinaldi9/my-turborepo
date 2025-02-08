import { Routes } from "@angular/router";

export default [
  { path: "home/path1", loadComponent: () => import("./path1") },
] satisfies Routes;
