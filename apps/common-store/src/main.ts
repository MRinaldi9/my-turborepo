import { enableElfProdMode } from "@ngneat/elf";
import { devTools } from "@ngneat/elf-devtools";

if (import.meta.env.PROD) {
  enableElfProdMode();
}

if (import.meta.env.DEV) {
  devTools({ name: "common-store", maxAge: 50 });
}
