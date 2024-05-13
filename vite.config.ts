import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { shadowStyle } from 'vite-plugin-shadow-style';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      // https://vitejs.dev/config/shared-options.html#css-modules
      // https://github.com/madyankin/postcss-modules?tab=readme-ov-file#generating-scoped-names
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        shadowStyle()
      ],
      input: "src/web-component.tsx",
      output: {
        entryFileNames: "bundle.js"
      }
    }
  },
  plugins: [react()],
})
