import { Routes } from "@angular/router";

export default [
  {
    path: "home",
    loadChildren: () => import("remote/remote-app"),
  },
  {
    path: "test",
    loadChildren: () => import("./test/test.routes"),
  },
  {
    redirectTo: "home",
    pathMatch: "full",
    path: "",
  },
] satisfies Routes;
