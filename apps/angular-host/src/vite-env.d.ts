/// <reference types="vite/client" />

declare module "remote/remote-app" {
  import { Type } from "@angular/core";
  const App: Type<unknown>;
  export default App;
}
