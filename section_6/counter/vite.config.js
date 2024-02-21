import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), million.vite({ auto: true })],
});
