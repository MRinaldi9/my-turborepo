import { Routes } from "@angular/router";

export default [
  {
    path: "home",
    loadComponent: () => import("remote/remote-app"),
  },
  {
    redirectTo: "home",
    pathMatch: "full",
    path: "",
  },
] satisfies Routes;
