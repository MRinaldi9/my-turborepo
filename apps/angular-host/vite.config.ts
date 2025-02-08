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
        "@angular/core": "@angular/core",
        "@angular/router": { name: "@angular/router", singleton: true },
        "@angular/common": { name: "@angular/common", singleton: true },
      },
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "remote",
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
