import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: { port: 5176 },
  plugins: [
    federation({
      name: "@common-store",
      filename: "remoteEntry.js",
      exposes: {
        "./auth": "./src/auth.repository.ts",
      },
      shared: {
        rxjs: "rxjs",
      },
    }),
  ],
  build: {
    target: "chrome89",
  },
});
