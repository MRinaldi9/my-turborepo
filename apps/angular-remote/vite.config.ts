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
        "./remote-app": "./src/app.ts",
      },
      shared: {
        rxjs: "rxjs",
        "zone.js": { name: "zone.js", singleton: true },
        "@angular/core": { name: "@angular/core", singleton: true },
        "@angular/router": { name: "@angular/router", singleton: true },
        "@angular/common": { name: "@angular/common", singleton: true },
        "@angular/animations": { name: "@angular/animations", singleton: true },
        "@angular/compiler": { name: "@angular/compiler", singleton: true },
        "@angular/forms": { name: "@angular/forms", singleton: true },
        "@angular/platform-browser": {
          name: "@angular/platform-browser",
          singleton: true,
        },
        "@angular/platform-browser-dynamic": {
          name: "@angular/platform-browser-dynamic",
          singleton: true,
        },
        "@angular/common/http": {
          name: "@angular/common/http",
          singleton: true,
        },
      },
      remotes: {},
    }),
  ],
  build: {
    target: "chrome89",
  },
});
