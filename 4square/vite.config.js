import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lottie-react'], // Explicitly include lottie-react for dependency optimization
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})



