import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/Blackwall-Protocol/', // 👈 ОБЯЗАТЕЛЬНО для GitHub Pages
  plugins: [react()],
})