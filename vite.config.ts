import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCss from 'unocss/vite';
import AutoImport from "unplugin-auto-import/vite"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCss(),
    AutoImport({
      dts:"src/types/auto-imports.d.ts",
      imports:["react"],
      dirs:["./src/hooks"],
    })
  ],
})
