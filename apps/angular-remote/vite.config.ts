import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: { port: 5174 },
  plugins: [
    angular(),
    federation({
      filename: "remoteEntry.js",
      name: "remote",
      exposes: {
        "./remote-app": "./src/app.routes.ts",
      },
      shared: {
        rxjs: "rxjs",
        "zone.js": { name: "zone.js", singleton: true },
        "@angular/core": "@angular/core",
        "@angular/router": { name: "@angular/router", singleton: true },
        "@angular/common": { name: "@angular/common", singleton: true },
      },
      remotes: {},
    }),
  ],
  build: {
    target: "chrome89",
  },
});
