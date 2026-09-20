import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { realpathSync } from "node:fs";
export default defineConfig({
  root: realpathSync(process.cwd()),
  resolve: { preserveSymlinks: true },
  optimizeDeps: {
    noDiscovery: true,
    include: [
      "react",
      "react-dom/client",
      "react/jsx-runtime",
      "react-router-dom",
      "lucide-react",
    ],
  },
  plugins: [react()],
});
