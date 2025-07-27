import { federation } from "@module-federation/vite";
import { defineConfig, PluginOption } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  server: { port: 5175 },
  plugins: [
    solid(),
    federation({
      name: "solid-header",
      exposes: {
        "./remote-app": "./src/App.tsx",
      },
      filename: "remoteEntry.js",
    }) as PluginOption,
  ],
  build: {
    target: "chrome89",
  },
});
