import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/todo_api": "http://localhost:8000/",
      "/coin_api": "http://localhost:8000/",
      "/todo_del_api": "http://localhost:8000/",
      "/todo_add_api": "http://localhost:8000/",
    },
  },
  plugins: [react()],
})
