import { Routes } from "@angular/router";

export default [
  {
    path: "home",
    loadChildren: () => import("remote/remote-app"),
  },
  {
    redirectTo: "home",
    pathMatch: "full",
    path: "",
  },
] satisfies Routes;
