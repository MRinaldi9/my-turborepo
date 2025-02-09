import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    angular(),
    federation({
      name: "angular-host",
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
      },
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
        "@common-store": {
          type: "module",
          name: "@common-store",
          entry: "http://localhost:5176/remoteEntry.js",
          entryGlobalName: "@common-store",
          shareScope: "default",
        },
      },
      exposes: {},
      filename: "remoteEntry.js",
    }),
  ],
  build: {
    target: "chrome89",
  },
});
