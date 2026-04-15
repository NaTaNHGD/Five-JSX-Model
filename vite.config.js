import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // <-- ESSENCIAL PARA FUNCIONAR NO FIVEM
  plugins: [react()],
  root: './',
  build: {
    outDir: 'C:\\trabalho\\bases\\atlanta_rj\\resources\\[Atlanta]\\atlanta_identity\\web\\build',
    emptyOutDir: true,
  },
})
