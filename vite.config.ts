import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [],
      input: "src/web-component.tsx",
      output: {
        format: "iife",
        entryFileNames: "bundle.js"
      }
    }
  },
  plugins: [react()],
})
