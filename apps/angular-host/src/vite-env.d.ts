/// <reference types="vite/client" />

declare module "remote/remote-app" {
  import { Routes } from "@angular/router";
  const routes: Routes;
  export default routes;
}

declare module "@common-store/auth" {
  import { Observable } from "rxjs";
  export const user$: Observable<{ id: number; name: string }>;
  export const getUser: () => void;
}
