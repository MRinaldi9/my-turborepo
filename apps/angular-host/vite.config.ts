/// <reference types="vitest" />
import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    plugins: [
      angular(),
      mode !== "test"
        ? [
            federation({
              name: "angular-host",
              shared: {
                rxjs: "rxjs",
                "zone.js": { name: "zone.js", singleton: true },
                "@angular/core": { name: "@angular/core", singleton: true },
                "@angular/router": {
                  name: "@angular/router",
                  singleton: true,
                },
                "@angular/common": {
                  name: "@angular/common",
                  singleton: true,
                },
                "@angular/common/http": {
                  name: "@angular/common/http",
                  singleton: true,
                },
                "@angular/animations": {
                  name: "@angular/animations",
                  singleton: true,
                },
                "@angular/compiler": {
                  name: "@angular/compiler",
                  singleton: true,
                },
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
                "solid-header": {
                  type: "module",
                  name: "solid-header",
                  entry: "http://localhost:5175/remoteEntry.js",
                  entryGlobalName: "solid-header",
                  shareScope: "default",
                },
              },
              exposes: {},
              filename: "remoteEntry.js",
            }),
          ]
        : [],
    ],
    build: {
      target: "chrome89",
    },
    test: {
      globals: true,
      setupFiles: ["./src/test-setup.ts"],
      environment: "jsdom",
      include: ["./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
      reporters: ["default"],
      alias: {
        "solid-header/remote-app": resolve(
          __dirname,
          "./src/__mocks__/solid-header/remote-app.ts"
        ),
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
