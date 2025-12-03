import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'framer-motion',
      'gsap',
      'gsap/ScrollTrigger',
      'gsap/ScrollSmoother',
      'react-router-dom'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
