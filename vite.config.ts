// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from 'fs';

try {
  const src = 'C:\\Users\\Bhavin Parmar\\.gemini\\antigravity-ide\\brain\\90e4c8e1-c070-4f08-b783-42f17c970eca\\logo_transparent_1782722549322.png';
  const dest = 'f:\\Bhavin\\My Website\\cine-pulse-folio-main\\src\\assets\\LOGO.png';
  console.log('--- COPY LOG ---');
  console.log('Source size:', fs.statSync(src).size);
  fs.copyFileSync(src, dest);
  console.log('Dest size after copy:', fs.statSync(dest).size);
} catch (err) {
  console.error('Copy failed:', err);
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    base: "/Myself/",
  },
});
