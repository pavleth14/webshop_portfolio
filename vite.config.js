import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/webshop_portfolio/',  
  build: {
    outDir: 'build', 
  },
})
